# Deploying to Netlify with CI/CD

This guide will help you deploy your portfolio to Netlify with automatic deployments on every code change.

## Prerequisites

1. A GitHub, GitLab, or Bitbucket account
2. A Netlify account (free tier is perfect for this)

## Step 1: Push Your Code to Git

If you haven't already, push your code to a Git repository:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio website"

# Add your remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to main branch
git push -u origin main
```

## Step 2: Connect to Netlify

### Option A: Deploy via Netlify UI (Recommended for CI/CD)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up or log in
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose your Git provider (GitHub, GitLab, or Bitbucket)
5. Authorize Netlify to access your repositories
6. Select your portfolio repository
7. Configure build settings:
   - **Build command**: `pnpm run build` (already configured in netlify.toml)
   - **Publish directory**: `dist` (already configured in netlify.toml)
   - **Node version**: 18 (already configured in netlify.toml)
8. Click **"Deploy site"**

### Option B: Deploy via Netlify CLI (Quick Deploy)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from your project root)
netlify deploy --prod
```

## Step 3: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your domain's DNS settings

## How CI/CD Works

Once connected via Option A:

1. **Automatic Deployments**: Every time you push changes to your Git repository, Netlify automatically:
   - Detects the push
   - Runs `pnpm run build`
   - Deploys the `dist` folder to production
   - Your site is live in ~1-2 minutes!

2. **Deploy Previews**: Pull requests automatically get preview URLs so you can test before merging

3. **Rollback**: You can instantly rollback to any previous deployment from the Netlify dashboard

## Making Changes & Publishing

```bash
# Make your changes to the code
# ...

# Stage and commit
git add .
git commit -m "Description of your changes"

# Push to trigger automatic deployment
git push

# That's it! Netlify will automatically build and deploy
```

## Environment Variables (if needed later)

If you need to add environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add your variables (they'll be available during build)

## Monitoring

- **Build logs**: Check the "Deploys" tab in Netlify dashboard
- **Analytics**: Enable Netlify Analytics for visitor stats (optional, paid feature)
- **Forms**: Netlify can handle form submissions (useful if you add a contact form later)

## Troubleshooting

### Build Fails
- Check the build log in Netlify dashboard
- Ensure `netlify.toml` is in your repository root
- Verify all dependencies are in `package.json`

### Site Shows 404
- Check that `publish = "dist"` matches your Vite output directory
- Ensure the redirect rule in `netlify.toml` is present (for client-side routing)

### Slow Builds
- Netlify caches `node_modules` between builds
- First build might take 2-3 minutes, subsequent builds ~30-60 seconds

## Your Site URL

After deployment, you'll get a URL like:
- **Free**: `https://your-site-name.netlify.app`
- **Custom**: `https://yourdomain.com` (if you configure a custom domain)

---

**That's it!** Your portfolio is now live with automatic CI/CD. Just push changes to Git and Netlify handles the rest! 🚀
