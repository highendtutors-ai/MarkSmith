# Marksmith

The reviewer's desk for scholarship applications. Reads applications, raises the questions a reviewer would raise, and scores them against a rubric you shape.

Built with React + Vite. Runs entirely in the browser and calls the Claude API directly using a key the user provides.

## Deploy to GitHub Pages

### 1. Create the repo

Create a new repository on GitHub. Name it whatever you like — for this guide, call it `marksmith`. Push these files to the `main` branch.

If your repo is called something other than `marksmith`, open `vite.config.js` and change the `base` value to match:

```js
base: '/your-repo-name/',
```

If you're deploying to a **user site** (`<username>.github.io`) or a custom domain, set:

```js
base: '/',
```

### 2. Enable GitHub Pages

In your repo on GitHub:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

That's it — the workflow in `.github/workflows/deploy.yml` will run on every push to `main`, build the site, and publish it.

### 3. Wait for the first deploy

Push to `main`, then go to the **Actions** tab and watch the "Deploy to GitHub Pages" workflow finish. Once it's green, your site is live at:

```
https://<your-username>.github.io/marksmith/
```

### 4. Add your Anthropic API key

Open the deployed site, click **Settings** in the nav, paste your API key from [console.anthropic.com](https://console.anthropic.com/settings/keys), and save. The key is stored only in your browser's localStorage — never uploaded anywhere except directly to `api.anthropic.com`.

## Bring-your-own-key: what this means

Because GitHub Pages is static hosting only, there's no backend to protect an API key. **Every person who uses the deployed site needs to enter their own Anthropic API key.** The key stays in their browser.

If you want to hand out the tool to reviewers who don't have their own API keys, you'll need a small backend to proxy the requests. Cloudflare Workers, Vercel Functions, or Netlify Functions all work — you can host the frontend on GitHub Pages and the proxy separately, then change the `fetch` call in `src/App.jsx` (search for `api.anthropic.com`) to point at your proxy instead. The proxy holds the key server-side.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Structure

```
marksmith/
├── .github/workflows/deploy.yml    GitHub Actions — auto-deploys on push to main
├── src/
│   ├── App.jsx                     The whole app: 6 pages, 4 tools
│   └── main.jsx                    React entry
├── index.html
├── package.json
├── vite.config.js                  ← change `base` if your repo name isn't 'marksmith'
└── README.md
```

## License

Do what you like with it.
