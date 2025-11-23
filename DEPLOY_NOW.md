# 🚀 Deploy to GitHub Pages

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: **`underwater-balloons-pop`**
3. Make it **Public**
4. Click **Create repository**

## Step 2: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**

## Step 3: Push Your Code

```bash
cd /Users/piyushkacha/Developer/Projects/Rive/underwater-balloons-pop

git init
git add .
git commit -m "🎈 Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/underwater-balloons-pop.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

## Step 4: Wait for Deployment

Go to **Actions** tab → Wait for green ✅ (~2 minutes)

## Step 5: Visit Your Live Site! 🎉

```
https://YOUR_USERNAME.github.io/underwater-balloons-pop/
```

---

## 🔄 Update Animation Later

1. Replace `public/kid_game_final_v2.riv` with new file
2. Run:
   ```bash
   git add .
   git commit -m "Update animation"
   git push
   ```

Done! Auto-deploys in 2 minutes.
