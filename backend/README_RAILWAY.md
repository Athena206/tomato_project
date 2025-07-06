# Railway Deployment Instructions

## 1. Set the Root Directory
- When connecting your repo to Railway, set the root directory to `backend`.

## 2. Set Build and Start Commands
- **Install Command:** `npm install`
- **Build Command:** `npm run heroku-postbuild`
- **Start Command:** `npm start`

## 3. Environment Variables
- Set `MONGODB_URI` in Railway's environment variables panel.

## 4. How it Works
- The backend will serve the frontend build after the build step.
- All API and static requests will work from the same Railway service.

## 5. Troubleshooting
- If you see `Could not find root directory: tomato_project`, make sure the root is set to `backend` in Railway settings.
