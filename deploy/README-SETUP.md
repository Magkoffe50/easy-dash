# Production Server Setup Guide

## Prerequisites Checklist

### 1. GitHub Secrets Configuration

Go to: **Repository Settings → Secrets and variables → Actions**

Add these secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `PRODUCTION_SERVER_HOST` | Your server IP or hostname | `123.45.67.89` |
| `PRODUCTION_SSH_KEY` | Private SSH key (full key) | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `PRODUCTION_SERVER_USER` | SSH username (optional) | `root` |
| `PRODUCTION_SSH_PORT` | SSH port (optional) | `22` |
| `PRODUCTION_DEPLOY_PATH` | Deployment path (optional) | `/opt/easy-dash` |

**How to generate SSH key pair:**
```bash
# Generate key pair
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy

# Copy PRIVATE key to GitHub secret (PRODUCTION_SSH_KEY)
cat ~/.ssh/github_deploy

# Copy PUBLIC key to server
ssh-copy-id -i ~/.ssh/github_deploy.pub root@your-server-ip
```

### 2. Server Initial Setup

SSH into your DigitalOcean server and run:

```bash
# Update system
apt-get update && apt-get upgrade -y

# Install basic tools
apt-get install -y curl wget git ufw

# Setup firewall
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# Create deployment directory
mkdir -p /opt/easy-dash
chmod 755 /opt/easy-dash
```

### 3. SSH Key Setup

**On your local machine:**
```bash
# Generate SSH key if you haven't already
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy

# Copy public key to server
ssh-copy-id -i ~/.ssh/github_deploy.pub root@your-server-ip
```

**On the server:**
```bash
# Ensure authorized_keys has correct permissions
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### 4. Nginx Installation

```bash
# Install Nginx
apt-get install -y nginx

# Start and enable Nginx
systemctl start nginx
systemctl enable nginx
```

### 5. SSL Certificate Setup

```bash
# Install Certbot
apt-get install -y certbot python3-certbot-nginx

# Get SSL certificate (after DNS is configured)
certbot --nginx -d easy-dash.dev -d www.easy-dash.dev

# Auto-renewal is set up automatically
certbot renew --dry-run
```

### 6. DNS Configuration

Point your domain to your server:

- **A Record**: `easy-dash.dev` → Your server IP
- **A Record**: `www.easy-dash.dev` → Your server IP

Wait for DNS propagation (can take up to 48 hours, usually much faster).

### 7. Environment Variables

After first deployment, SSH into server and configure:

```bash
cd /opt/easy-dash
nano .env
```

Update these values:
```env
DB_DATABASE=easy_dash_db
DB_USERNAME=postgres
DB_PASSWORD=YOUR_STRONG_PASSWORD_HERE
JWT_SECRET=YOUR_STRONG_JWT_SECRET_HERE
JWT_EXPIRES_IN=24h
FRONTEND_URL=https://easy-dash.dev
NEXT_PUBLIC_API_URL=https://easy-dash.dev/api
R2_ACCOUNT_ID=your_r2_account_id
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
R2_BUCKET_NAME=your_bucket_name
R2_PUBLIC_URL=https://your-cdn-domain.com
```

### 8. First Deployment

1. Go to GitHub Actions tab
2. Select "CI/CD Pipeline" workflow
3. Click "Run workflow"
4. Select `production` environment
5. Click "Run workflow"

The pipeline will:
- Install Docker and Docker Compose (if needed)
- Create deployment directory
- Set up Nginx configuration
- Deploy your application

### 9. Post-Deployment Verification

```bash
# SSH into server
ssh root@your-server-ip

# Check containers
cd /opt/easy-dash
docker-compose -f docker-compose.prod.yml ps

# Check logs
docker-compose -f docker-compose.prod.yml logs

# Check Nginx
nginx -t
systemctl status nginx
```

### 10. Troubleshooting

**If deployment fails:**
```bash
# Check Docker
docker --version
docker-compose --version

# Check disk space
df -h

# Check logs
journalctl -u docker
docker-compose -f docker-compose.prod.yml logs
```

**If containers won't start:**
```bash
# Check environment variables
cd /opt/easy-dash
cat .env

# Check port conflicts
netstat -tulpn | grep -E ':(3000|3001)'

# Restart containers
docker-compose -f docker-compose.prod.yml restart
```

## Security Checklist

- [ ] SSH key-based authentication enabled
- [ ] Password authentication disabled (optional but recommended)
- [ ] Firewall configured (ports 22, 80, 443)
- [ ] Strong database password set
- [ ] Strong JWT secret set
- [ ] SSL certificates installed and auto-renewal enabled
- [ ] Regular system updates scheduled

## Maintenance

**Update application:**
- Just trigger the workflow again from GitHub Actions

**View logs:**
```bash
cd /opt/easy-dash
docker-compose -f docker-compose.prod.yml logs -f
```

**Restart services:**
```bash
cd /opt/easy-dash
docker-compose -f docker-compose.prod.yml restart
```

**Backup database:**
```bash
cd /opt/easy-dash
docker-compose -f docker-compose.prod.yml exec postgres pg_dump -U postgres easy_dash_db > backup_$(date +%Y%m%d).sql
```

