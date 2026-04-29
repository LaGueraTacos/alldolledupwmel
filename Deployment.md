# Deploying alldolledupwmel to Vercel

This guide walks you from a local Git repository to a live site on Vercel: prepare your code, push to a Git host, connect Vercel, deploy, optionally add a custom domain, and keep shipping updates safely.

## Prerequisites

- A [Vercel](https://vercel.com) account. Signing in with GitHub is the smoothest path if your code lives on GitHub.
- [Git](https://git-scm.com/) installed on your machine.
- Node.js installed locally (match what you use for development; you can pin a version in `package.json` under `"engines"` if you want Vercel to use a specific Node release).

---

## Personal GitHub vs brand account (your situation)

You might be signed into GitHub in the browser as **Jonathan Gonzalez**, while the repository will live under **LaGueraTacos** (a separate user or organization). That is normal. Deployment still works as long as **(1) the repo exists under LaGueraTacos**, **(2) your machine can push to it**, and **(3) Vercel is allowed to read that repo** from whichever Vercel/GitHub login you use.

### A. Create the repository under LaGueraTacos

1. In the browser, switch to the account that owns **LaGueraTacos** (GitHub profile menu → **Switch account** / sign out and sign in as that account), *or* stay on Jonathan’s account if Jonathan is an **org member** with permission to create repositories there.
2. On GitHub, create the new repo under **`LaGueraTacos/<repo-name>`** (user or organization namespace), empty or with a README—your choice.
3. If only the **LaGueraTacos** account should own the code, avoid creating the repo only on Jonathan’s personal namespace unless you plan to transfer it later.

### B. Push from your laptop (Git credentials)

Your **local Git** does not have to “be” the LaGueraTacos browser session. It only needs **credentials that are allowed to push** to `LaGueraTacos/<repo>`.

Pick one approach:

| Approach | When to use it |
|----------|----------------|
| **Jonathan is a collaborator on the org repo** | Easiest: add **Jonathan Gonzalez** as a collaborator (personal repo) or **org member** with write access to the repo. Then use your normal `git push`; authenticate with Jonathan’s **PAT** or **SSH key** registered on Jonathan’s GitHub. The remote URL is still `LaGueraTacos/repo`. |
| **Only the LaGueraTacos account may push** | Use a **Personal Access Token** or **SSH key** attached to the **LaGueraTacos** GitHub account. On one machine with two GitHub accounts, use **SSH config** (`Host github-laguera` + `IdentityFile`) and set `origin` to `git@github-laguera:LaGueraTacos/repo.git`, or use Git Credential Manager and sign in as LaGueraTacos when prompted. |

Sanity checks:

```bash
git remote -v
# Should show LaGueraTacos/<repo>, not only your personal username unless that is intentional.

git push -u origin main
# If this fails with “permission denied” or 403, fix GitHub access or credentials—not Vercel yet.
```

### C. Vercel: which account to use

- **Common pattern:** Log into [Vercel](https://vercel.com) with **your personal GitHub (Jonathan)** or a **shared team** you control. When you **Import Project**, select the repository **`LaGueraTacos/...`** from the list.
- **First-time org access:** GitHub may ask an **organization owner** to **approve the Vercel GitHub App** (or fine-grained permissions) for **LaGueraTacos**. Until that is approved, the repo will not appear or import will fail. This is done once per org (or per fine-grained policy).
- **Billing and ownership:** The Vercel **project** lives under whatever Vercel team you chose (hobby team under your email, or a Pro team). The **Git repo** can still be under LaGueraTacos; they are linked by the Git integration, not by matching GitHub display names.

### D. Short decision guide

1. **Repo URL** should be `github.com/LaGueraTacos/<repo>`.
2. **You** need push rights (Jonathan with access, or LaGueraTacos credentials on your machine).
3. **Vercel** needs GitHub app access to that org/repo (org approval if required).
4. Deploy as in **Part 3** below—no change to the build steps; only Git permissions differ.

---

## Part 1 — Git: commit and push

### 1.1 Review what will ship

From the project root (`alldolledupwmel`):

```bash
git status
```

Confirm only the files you intend to deploy are staged. Avoid committing:

- Local env files with secrets (for example `.env.local`)
- Editor junk, huge binaries you do not need, or personal notes

If you use environment variables for API keys or URLs, you will add those in the Vercel dashboard later, not in Git.

### 1.2 Commit your work

```bash
git add .
git commit -m "Prepare site for production deployment"
```

Use a clear commit message; it appears in deployment history and helps when you debug “what shipped when.”

### 1.3 Connect a remote (first time only)

If this folder is not yet linked to GitHub (or GitLab / Bitbucket):

1. Create a **new empty repository** on your host (no README required if you already have code locally).
2. Add the remote and push. Example for GitHub:

```bash
git remote add origin https://github.com/OWNER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

`OWNER` is either your GitHub username or an organization name (for example `LaGueraTacos`).

If `origin` already exists:

```bash
git push origin main
```

Replace `main` with your default branch name if you use something else (for example `master`).

---

## Part 2 — Verify the build locally

Before Vercel runs a build in the cloud, run the same command locally:

```bash
npm install
npm run build
```

- If the build fails, fix errors until it passes. Vercel will run an equivalent production build; fixing locally is faster than iterating only on deploy logs.
- Optional: run `npm run start` after a successful build to smoke-test the production build on `http://localhost:3000`.

---

## Part 3 — Import the project on Vercel

### 3.1 Sign in and import

1. Open [vercel.com](https://vercel.com) and sign in.
2. Click **Add New…** → **Project**.
3. Under **Import Git Repository**, choose your Git provider and select the repository that contains this Next.js app.

### 3.2 Configure the project

Vercel usually auto-detects **Next.js**. Confirm:

| Setting | Typical value |
|--------|----------------|
| **Framework Preset** | Next.js |
| **Root Directory** | `.` (repository root), unless your app lives in a monorepo subfolder |
| **Build Command** | `next build` (default) |
| **Install Command** | `npm install` (default) or your package manager of choice |

You normally do **not** need to change the output directory for a standard Next.js App Router project; Vercel handles it.

### 3.3 Environment variables

If your app needs secrets or public config at build/runtime:

1. In the import flow (or later under **Settings → Environment Variables**), add each variable.
2. Use **Production**, **Preview**, and **Development** scopes as appropriate.
3. Names like `NEXT_PUBLIC_*` are exposed to the browser; never put secrets in those.

After changing variables, trigger a new deployment (redeploy from the dashboard or push a commit).

---

## Part 4 — Deploy

1. Click **Deploy** on the import screen.
2. Wait for the build and deploy steps to finish.
3. On success, Vercel shows a **production URL** (for example `https://your-project-name.vercel.app`).

That URL is your live site unless you attach a custom domain.

### Production vs preview

- **Production deployment** — Usually tracks your primary branch (commonly `main`). This is what visitors see at your production domain.
- **Preview deployment** — Each pull request and non-production branch typically gets its own URL so you can review changes before merging.

---

## Part 5 — Custom domain (optional)

1. In your Vercel project: **Settings** → **Domains**.
2. Enter your domain (for example `www.yourbrand.com` or `yourbrand.com`).
3. Follow Vercel’s DNS instructions at your domain registrar (often **CNAME** for subdomains or **A** records for apex domains).
4. Wait for DNS to propagate and for Vercel to provision TLS. This can be quick (minutes) or take longer depending on DNS TTL and registrar caching (up to 24–48 hours in edge cases).

---

## Part 6 — Day-to-day: ship changes from Git to live

### Option A — Feature branch and pull request (recommended)

```bash
git checkout -b feature/describe-change
# make edits, test locally
npm run build
git add .
git commit -m "Describe the user-visible change"
git push -u origin feature/describe-change
```

Open a **Pull Request** on GitHub. Vercel comments with a **Preview** URL. After review, merge into `main`. Merging triggers a **Production** deployment (when `main` is your production branch).

### Option B — Push straight to production branch

```bash
git add .
git commit -m "Your message"
git push origin main
```

Every push to the branch connected to production triggers a new production deployment.

---

## Part 7 — Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Build fails on Vercel | Open the failed deployment → **Building** / **Build Logs**. Compare with local `npm run build`. |
| Missing API keys or config | **Settings → Environment Variables**; ensure correct scope (Production vs Preview); redeploy. |
| Wrong Node.js version | **Project → Settings → General → Node.js Version**, or set `"engines": { "node": ">=20" }` in `package.json` per [Vercel docs](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js#node.js-version). |
| Page 404 or wrong routes | Confirm `src/app` structure and any `next.config` rewrites/redirects. |
| Old content after deploy | Hard refresh or check you are opening the latest deployment URL; confirm the correct branch was pushed. |

---

## Part 8 — Pre-launch checklist

Use this before calling the first deploy “done”:

- [ ] `npm run build` succeeds locally  
- [ ] No secrets committed in tracked files  
- [ ] Required env vars set in Vercel for Production (and Preview if needed)  
- [ ] Remote repository is up to date and connected to the Vercel project  
- [ ] Smoke-test production URL: navigation, booking link, images, mobile layout  
- [ ] Optional: custom domain DNS and HTTPS verified  

---

## References

- [Vercel — Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)  
- [Vercel — Git integration](https://vercel.com/docs/git)  
- [Next.js — Deployment (including Vercel)](https://nextjs.org/docs/app/building-your-application/deploying)
