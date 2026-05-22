# HermentivIO Status Page Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Add a `/status` route that gives Francisco a clear operational snapshot of HermentivIO without exposing secrets.

**Architecture:** Keep the current Cloudflare Worker simple. Add a small metadata object in `src/index.js`, reuse it for `/health`, `/status`, and the landing panel, and keep sensitive data out of all responses.

**Tech Stack:** Cloudflare Workers, JavaScript ESM, Wrangler, GitHub deploy via Cloudflare.

---

### Task 1: Add central service metadata

**Objective:** Define one metadata object used by all routes.

**Files:**

- Modify: `src/index.js`

**Step 1: Add metadata near the top of the file**

```js
const SERVICE = {
  name: "HermentivIO",
  owner: "Inventivia Marketing",
  status: "online",
  version: "0.1.0",
  modules: ["landing", "health", "status"]
};
```

**Step 2: Update `/health` to use the object**

Expected response:

```json
{
  "ok": true,
  "service": "HermentivIO",
  "owner": "Inventivia Marketing"
}
```

**Step 3: Run dry-run**

```bash
npx wrangler deploy --dry-run
```

Expected: success.

---

### Task 2: Add `/status` JSON route

**Objective:** Create a safe operational status endpoint.

**Files:**

- Modify: `src/index.js`

**Step 1: Add route**

```js
if (url.pathname === "/status") {
  return Response.json({
    ...SERVICE,
    timestamp: new Date().toISOString()
  });
}
```

**Step 2: Verify locally with dry-run**

```bash
npx wrangler deploy --dry-run
```

Expected: success.

---

### Task 3: Update the landing page to link `/status`

**Objective:** Add a visible button or panel item for the new status route.

**Files:**

- Modify: `src/index.js`

**Step 1: Add a status action**

Add one button:

```html
<a class="button secondary" href="/status">Ver status</a>
```

**Step 2: Update panel**

Add module text:

```text
Módulos: landing · health · status
```

**Step 3: Dry-run**

```bash
npx wrangler deploy --dry-run
```

Expected: success.

---

### Task 4: Commit, push and verify production

**Objective:** Deploy through the connected GitHub → Cloudflare flow.

**Files:**

- Modify: `src/index.js`

**Step 1: Commit**

```bash
git add src/index.js docs/plans/2026-05-22-status-route.md
git commit -m "Add HermentivIO status route plan"
```

**Step 2: Push**

```bash
git push origin main
```

**Step 3: Verify after deploy**

```bash
curl https://hermentivio.contacto-0dc.workers.dev/status
```

Expected: JSON with `status: "online"` and `modules` containing `status`.
