# 🚀 Staging Deployment Guide

Complete guide for setting up automated staging deployments with GitHub Actions and free hosting services.

---

## 📋 Table of Contents

1. [GitHub Actions Setup](#github-actions-setup)
2. [Free Hosting Services](#free-hosting-services)
3. [Service-Specific Setup](#service-specific-setup)
4. [Environment Configuration](#environment-configuration)
5. [Manual Deployment](#manual-deployment)

---

## 🎯 GitHub Actions Setup

### Overview

The workflow file `.github/workflows/deploy-staging.yml` provides:
- ✅ Manual trigger (button in GitHub UI)
- ✅ Build and test before deployment
- ✅ Environment-specific configuration
- ✅ Deployment notifications

### How to Use

1. **Go to GitHub Actions Tab**
   - Navigate to your repository on GitHub
   - Click on "Actions" tab

2. **Select Workflow**
   - Click on "Deploy to Staging" workflow

3. **Run Workflow**
   - Click "Run workflow" button
   - Select environment: `staging`
   - Optionally skip tests
   - Click "Run workflow" green button

4. **Monitor Progress**
   - Watch the workflow run in real-time
   - See build logs and deployment status

---

## 🌐 Free Hosting Services

### Recommended Services (Free Tier)

| Service | Frontend | Backend | Database | Best For |
|---------|----------|---------|----------|----------|
| **Vercel** | ✅ Excellent | ⚠️ Serverless | ❌ External | Next.js apps |
| **Railway** | ✅ Good | ✅ Excellent | ✅ Included | Full-stack apps |
| **Render** | ✅ Good | ✅ Excellent | ✅ Included | Full-stack apps |
| **Fly.io** | ✅ Good | ✅ Excellent | ✅ Included | Docker apps |
| **Netlify** | ✅ Excellent | ⚠️ Serverless | ❌ External | Static/SSG |
| **Supabase** | ❌ No | ❌ No | ✅ Excellent | Database only |

---

## 🏆 Top Recommendations

### 1. **Railway** (Best Overall) ⭐⭐⭐⭐⭐

**Why Choose Railway:**
- ✅ Free tier: $5/month credit (usually enough for staging)
- ✅ Deploys both frontend and backend
- ✅ PostgreSQL database included
- ✅ Automatic deployments from GitHub
- ✅ Environment variables management
- ✅ Custom domains
- ✅ Easy setup

**Limitations:**
- Free tier has usage limits
- Sleeps after inactivity (wakes on request)

**Setup Time:** ~15 minutes

---

### 2. **Render** (Best Free Tier) ⭐⭐⭐⭐⭐

**Why Choose Render:**
- ✅ Free tier: 750 hours/month
- ✅ PostgreSQL database (free tier)
- ✅ Auto-deploy from GitHub
- ✅ Environment variables
- ✅ Custom domains
- ✅ SSL certificates included

**Limitations:**
- Services sleep after 15 min inactivity
- Slower cold starts

**Setup Time:** ~20 minutes

---

### 3. **Vercel** (Best for Next.js) ⭐⭐⭐⭐

**Why Choose Vercel:**
- ✅ Excellent Next.js support
- ✅ Free tier: Unlimited
- ✅ Automatic deployments
- ✅ Edge functions
- ✅ Great performance

**Limitations:**
- Backend needs separate hosting (Railway/Render)
- Serverless functions only

**Setup Time:** ~10 minutes (frontend only)

---

## 🔧 Service-Specific Setup

### Option 1: Railway (Recommended)

#### Step 1: Sign Up
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project

#### Step 2: Deploy Backend
1. Click "New" → "GitHub Repo"
2. Select your repository
3. Select `backend` folder
4. Railway auto-detects NestJS
5. Add environment variables (see below)
6. Deploy!

#### Step 3: Deploy Frontend
1. Click "New" → "GitHub Repo"
2. Select your repository
3. Select `front` folder
4. Railway auto-detects Next.js
5. Add environment variables
6. Deploy!

#### Step 4: Add PostgreSQL
1. Click "New" → "Database" → "PostgreSQL"
2. Railway creates database automatically
3. Copy connection string
4. Add to backend environment variables

#### Step 5: Connect Services
1. Backend connects to PostgreSQL automatically
2. Frontend connects to backend via environment variable
3. Set `NEXT_PUBLIC_API_URL` in frontend

**Railway Dashboard:** [railway.app/dashboard](https://railway.app/dashboard)

---

### Option 2: Render

#### Step 1: Sign Up
1. Go to [render.com](https://render.com)
2. Sign up with GitHub

#### Step 2: Deploy Backend
1. Click "New" → "Web Service"
2. Connect GitHub repository
3. Settings:
   - **Name:** `easy-dash-backend-staging`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start:prod`
   - **Environment:** `Node`
   - **Node Version:** `20`
4. Add environment variables
5. Deploy!

#### Step 3: Deploy Frontend
1. Click "New" → "Static Site"
2. Connect GitHub repository
3. Settings:
   - **Name:** `easy-dash-frontend-staging`
   - **Root Directory:** `front`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `front/.next`
4. Add environment variables
5. Deploy!

#### Step 4: Add PostgreSQL
1. Click "New" → "PostgreSQL"
2. Render creates database
3. Copy connection string
4. Add to backend environment variables

**Render Dashboard:** [dashboard.render.com](https://dashboard.render.com)

---

### Option 3: Vercel (Frontend) + Railway (Backend)

#### Vercel Setup (Frontend)
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Settings:
   - **Root Directory:** `front`
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
4. Add environment variables
5. Deploy!

#### Railway Setup (Backend)
Follow Railway backend setup above.

**Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🔐 Environment Configuration

### Backend Environment Variables

Create `.env.staging` or set in hosting service:

```env
# Database
DB_HOST=your-db-host
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_DATABASE=your-database

# Application
NODE_ENV=production
PORT=3001

# JWT
JWT_SECRET=your-staging-jwt-secret
JWT_EXPIRES_IN=24h

# CORS (Frontend URL)
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Frontend Environment Variables

Set in hosting service or `.env.staging`:

```env
# API URL (Backend)
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app

# Environment
NODE_ENV=production
```

---

## 🚀 Manual Deployment via GitHub Actions

### Prerequisites

1. **Set GitHub Secrets:**
   - Go to repository → Settings → Secrets and variables → Actions
   - Add secrets:
     - `STAGING_API_URL` - Your backend URL
     - `STAGING_DEPLOYMENT_TOKEN` - Deployment token (if needed)

2. **Configure Workflow:**
   - The workflow is already set up in `.github/workflows/deploy-staging.yml`
   - Customize deployment steps based on your hosting service

### Deploy Steps

1. **Trigger Workflow:**
   ```
   GitHub → Actions → Deploy to Staging → Run workflow
   ```

2. **Select Options:**
   - Environment: `staging`
   - Skip tests: `false` (recommended)

3. **Monitor:**
   - Watch build logs
   - Check deployment status
   - Verify deployment URL

---

## 📝 GitHub Actions Workflow Customization

### For Railway Deployment

Add to `.github/workflows/deploy-staging.yml`:

```yaml
- name: Deploy to Railway
  run: |
    npm install -g @railway/cli
    railway login --token ${{ secrets.RAILWAY_TOKEN }}
    railway link ${{ secrets.RAILWAY_PROJECT_ID }}
    railway up
  env:
    RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

### For Render Deployment

Render auto-deploys on push, but you can trigger manually:

```yaml
- name: Trigger Render Deployment
  run: |
    curl -X POST "https://api.render.com/deploy/srv/${{ secrets.RENDER_SERVICE_ID }}?key=${{ secrets.RENDER_API_KEY }}"
```

### For Vercel Deployment

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org: ${{ secrets.VERCEL_ORG }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
    working-directory: ./front
```

---

## 🔄 Automated Deployment Setup

### Railway Auto-Deploy

1. Connect GitHub repo in Railway
2. Enable "Auto Deploy" in service settings
3. Select branch: `main` or `staging`
4. Railway deploys automatically on push

### Render Auto-Deploy

1. Connect GitHub repo in Render
2. Auto-deploy is enabled by default
3. Deploys on push to connected branch

### Vercel Auto-Deploy

1. Import GitHub repo in Vercel
2. Auto-deploy is enabled by default
3. Deploys on push to connected branch

---

## 🎯 Recommended Setup

### Best Combination for Your Stack

**Frontend:** Vercel (Next.js optimized)
**Backend:** Railway (easy setup, includes DB)
**Database:** Railway PostgreSQL (included)

**Why:**
- ✅ Vercel is best for Next.js
- ✅ Railway is easiest for full-stack
- ✅ Both have good free tiers
- ✅ Both support GitHub integration
- ✅ Both have manual deploy buttons

---

## 📊 Comparison Table

| Feature | Railway | Render | Vercel |
|---------|---------|--------|--------|
| **Free Tier** | $5/month credit | 750 hrs/month | Unlimited |
| **Frontend** | ✅ Good | ✅ Good | ✅ Excellent |
| **Backend** | ✅ Excellent | ✅ Excellent | ⚠️ Serverless |
| **Database** | ✅ Included | ✅ Included | ❌ No |
| **Auto-Deploy** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Manual Deploy** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Custom Domain** | ✅ Yes | ✅ Yes | ✅ Yes |
| **SSL** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Sleep Mode** | ⚠️ Yes | ⚠️ Yes | ❌ No |
| **Setup Time** | 15 min | 20 min | 10 min |

---

## 🛠️ Quick Start Checklist

### Railway Setup
- [ ] Sign up at railway.app
- [ ] Create new project
- [ ] Deploy backend service
- [ ] Deploy frontend service
- [ ] Add PostgreSQL database
- [ ] Configure environment variables
- [ ] Test deployment
- [ ] Set up custom domain (optional)

### GitHub Actions Setup
- [ ] Add secrets to GitHub
- [ ] Customize workflow file
- [ ] Test manual trigger
- [ ] Verify deployment

### Post-Deployment
- [ ] Test frontend URL
- [ ] Test backend API
- [ ] Test database connection
- [ ] Verify environment variables
- [ ] Test authentication flow
- [ ] Monitor logs

---

## 🐛 Troubleshooting

### Common Issues

**1. Build Fails**
- Check Node.js version (should be 20.x)
- Verify all dependencies installed
- Check build logs for errors

**2. Database Connection Fails**
- Verify connection string
- Check database is running
- Verify credentials

**3. Environment Variables Not Working**
- Check variable names (case-sensitive)
- Verify variables are set in hosting service
- Restart service after adding variables

**4. CORS Errors**
- Add frontend URL to backend CORS config
- Check `FRONTEND_URL` environment variable

---

## 📚 Additional Resources

- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## ✅ Next Steps

1. Choose hosting service (Railway recommended)
2. Set up accounts
3. Deploy services
4. Configure GitHub Actions
5. Test manual deployment
6. Set up auto-deploy (optional)

---

**Status:** Ready for deployment setup! 🚀

