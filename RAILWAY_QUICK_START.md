# 🚂 Railway Quick Start Guide

Step-by-step guide to deploy your Easy Dash app to Railway staging environment.

---

## ⚡ Quick Setup (15 minutes)

### Step 1: Sign Up
1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Sign up with GitHub (recommended)
4. Authorize Railway to access your repositories

### Step 2: Create Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `easy-dash` repository
4. Railway will create a new project

### Step 3: Add PostgreSQL Database
1. In your Railway project, click "New"
2. Select "Database" → "Add PostgreSQL"
3. Railway creates database automatically
4. Click on the database service
5. Copy the **Connection URL** (you'll need this)

### Step 4: Deploy Backend
1. In Railway project, click "New"
2. Select "GitHub Repo"
3. Choose your repository
4. Railway will ask for root directory:
   - Enter: `backend`
5. Railway auto-detects NestJS
6. Click "Deploy"

**Configure Backend Environment Variables:**
1. Click on your backend service
2. Go to "Variables" tab
3. Add these variables (see template below)
4. Railway will redeploy automatically

### Step 5: Deploy Frontend
1. In Railway project, click "New"
2. Select "GitHub Repo"
3. Choose your repository
4. Railway will ask for root directory:
   - Enter: `front`
5. Railway auto-detects Next.js
6. Click "Deploy"

**Configure Frontend Environment Variables:**
1. Click on your frontend service
2. Go to "Variables" tab
3. Add these variables (see template below)
4. Railway will redeploy automatically

### Step 6: Get URLs
1. Click on backend service → "Settings" → "Generate Domain"
2. Copy the URL (e.g., `easy-dash-backend-production.up.railway.app`)
3. Click on frontend service → "Settings" → "Generate Domain"
4. Copy the URL (e.g., `easy-dash-frontend-production.up.railway.app`)

### Step 7: Update Environment Variables
1. **Backend:** Add `FRONTEND_URL` with your frontend Railway URL
2. **Frontend:** Add `NEXT_PUBLIC_API_URL` with your backend Railway URL
3. Services will redeploy automatically

---

## 🔐 Environment Variables

### Backend Variables

Add these in Railway backend service → Variables:

```env
# Database (Use Railway PostgreSQL connection string)
DATABASE_URL=${{Postgres.DATABASE_URL}}
# OR manually:
DB_HOST=${{Postgres.PGHOST}}
DB_PORT=${{Postgres.PGPORT}}
DB_USERNAME=${{Postgres.PGUSER}}
DB_PASSWORD=${{Postgres.PGPASSWORD}}
DB_DATABASE=${{Postgres.PGDATABASE}}

# Application
NODE_ENV=production
PORT=3001

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRES_IN=24h

# CORS (Your frontend Railway URL)
FRONTEND_URL=https://your-frontend-url.railway.app
```

**Railway Tip:** Use `${{Postgres.DATABASE_URL}}` to reference the database connection automatically!

### Frontend Variables

Add these in Railway frontend service → Variables:

```env
# API URL (Your backend Railway URL)
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app

# Environment
NODE_ENV=production
```

---

## 🎯 Manual Deployment Button

### Option 1: Railway Dashboard
1. Go to Railway dashboard
2. Click on your service (backend or frontend)
3. Click "Deploy" button
4. Select branch: `main` or `staging`
5. Click "Deploy"

### Option 2: GitHub Actions
1. Go to your GitHub repository
2. Click "Actions" tab
3. Select "Deploy to Staging (Railway)"
4. Click "Run workflow"
5. Click green "Run workflow" button

---

## 🔄 Auto-Deploy Setup

Railway auto-deploys by default, but you can configure it:

1. Click on your service
2. Go to "Settings" tab
3. Scroll to "Deployments"
4. Configure:
   - **Branch:** `main` (or `staging`)
   - **Auto Deploy:** Enabled
   - **Deploy on Push:** Enabled

Now every push to `main` branch will automatically deploy!

---

## 📊 Railway Dashboard

Access your services:
- **Dashboard:** [railway.app/dashboard](https://railway.app/dashboard)
- **Project:** Shows all your services
- **Logs:** Real-time deployment and runtime logs
- **Metrics:** CPU, memory, network usage
- **Settings:** Environment variables, domains, etc.

---

## 🐛 Troubleshooting

### Build Fails
**Problem:** Build errors in logs
**Solution:**
- Check Node.js version (should be 20.x)
- Verify all dependencies in package.json
- Check build logs for specific errors

### Database Connection Fails
**Problem:** Backend can't connect to database
**Solution:**
- Verify `DATABASE_URL` is set correctly
- Use Railway's `${{Postgres.DATABASE_URL}}` reference
- Check database service is running
- Verify network settings

### Frontend Can't Reach Backend
**Problem:** CORS errors or API calls fail
**Solution:**
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check `FRONTEND_URL` in backend matches frontend URL
- Verify backend CORS configuration
- Check Railway service URLs are correct

### Services Sleep
**Problem:** Services take time to respond
**Solution:**
- Railway free tier services sleep after inactivity
- First request may take 30-60 seconds (cold start)
- Subsequent requests are fast
- Consider upgrading to paid plan for always-on

---

## 💰 Railway Pricing

### Free Tier
- $5/month credit
- Usually enough for staging/testing
- Services sleep after inactivity
- 512MB RAM per service
- 1GB storage

### Paid Plans
- **Developer:** $5/month + usage
- **Team:** $20/month + usage
- Always-on services
- More resources

**For staging:** Free tier is usually sufficient!

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Backend service is running
- [ ] Frontend service is running
- [ ] Database is connected
- [ ] Backend API responds (check `/api` for Swagger)
- [ ] Frontend loads correctly
- [ ] Frontend can call backend API
- [ ] Authentication works
- [ ] Environment variables are set correctly
- [ ] Logs show no errors

---

## 🚀 Next Steps

1. **Set up custom domain** (optional)
   - Railway → Service → Settings → Custom Domain
   - Add your domain
   - Railway provides SSL automatically

2. **Set up monitoring** (optional)
   - Railway provides basic metrics
   - Consider adding error tracking (Sentry, etc.)

3. **Configure production environment**
   - Create separate Railway project for production
   - Use same setup steps
   - Use different environment variables

---

## 📚 Resources

- [Railway Docs](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)
- [Railway Status](https://status.railway.app)

---

**Ready to deploy?** Follow the steps above and you'll have your staging environment running in 15 minutes! 🚀

