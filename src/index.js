const SERVICE = {
  name: "HermentivIO",
  owner: "Inventivia Marketing",
  status: "online",
  version: "0.1.0",
  modules: ["landing", "health", "status"]
};

const landingHtml = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HermentivIO — Inventivia Marketing</title>
  <meta name="description" content="HermentivIO, asistente IA de Inventivia Marketing." />
  <style>
    :root {
      color-scheme: dark;
      --bg: #08090a;
      --panel: rgba(255,255,255,.035);
      --panel-strong: rgba(255,255,255,.06);
      --border: rgba(255,255,255,.09);
      --border-soft: rgba(255,255,255,.055);
      --text: #f7f8f8;
      --muted: #a7adb8;
      --dim: #62666d;
      --accent: #7170ff;
      --accent-2: #5e6ad2;
      --green: #10b981;
      --shadow: 0 24px 80px rgba(0,0,0,.45);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at 18% 10%, rgba(113,112,255,.22), transparent 34rem),
        radial-gradient(circle at 82% 18%, rgba(16,185,129,.12), transparent 30rem),
        linear-gradient(180deg, #0d0e12 0%, var(--bg) 44%, #010102 100%);
      color: var(--text);
      letter-spacing: -0.02em;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
      background-size: 64px 64px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 70%);
    }

    .page {
      position: relative;
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
      padding: 28px 0 48px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--text);
      text-decoration: none;
      font-weight: 650;
    }

    .logo {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: linear-gradient(135deg, rgba(113,112,255,.28), rgba(255,255,255,.04));
      box-shadow: inset 0 1px 0 rgba(255,255,255,.12);
    }

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--border-soft);
      border-radius: 999px;
      background: rgba(255,255,255,.025);
      color: var(--muted);
      font-size: 13px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 24px rgba(16,185,129,.9);
    }

    main {
      display: grid;
      grid-template-columns: 1.08fr .92fr;
      gap: 32px;
      align-items: center;
      min-height: calc(100vh - 140px);
      padding: 46px 0 28px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 10px;
      margin-bottom: 22px;
      border: 1px solid var(--border-soft);
      border-radius: 999px;
      background: rgba(255,255,255,.026);
      color: #d0d6e0;
      font-size: 13px;
    }

    h1 {
      margin: 0;
      max-width: 760px;
      font-size: clamp(46px, 8vw, 86px);
      line-height: .92;
      font-weight: 720;
      letter-spacing: -0.075em;
    }

    .gradient-text {
      display: block;
      background: linear-gradient(135deg, #fff 0%, #d8dbff 38%, #828fff 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .lead {
      max-width: 640px;
      margin: 24px 0 0;
      color: var(--muted);
      font-size: clamp(17px, 2vw, 20px);
      line-height: 1.65;
      letter-spacing: -0.025em;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 17px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 620;
      font-size: 14px;
      transition: transform .2s ease, border-color .2s ease, background .2s ease;
    }

    .button.primary {
      color: white;
      background: linear-gradient(135deg, var(--accent-2), var(--accent));
      box-shadow: 0 14px 36px rgba(94,106,210,.28);
    }

    .button.secondary {
      color: #e2e4e7;
      border: 1px solid var(--border);
      background: rgba(255,255,255,.035);
    }

    .button:hover { transform: translateY(-1px); }

    .console {
      position: relative;
      border: 1px solid var(--border);
      border-radius: 22px;
      background: linear-gradient(180deg, rgba(255,255,255,.065), rgba(255,255,255,.025));
      box-shadow: var(--shadow), inset 0 1px 0 rgba(255,255,255,.1);
      overflow: hidden;
    }

    .console-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      border-bottom: 1px solid var(--border-soft);
      color: var(--dim);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
      background: rgba(0,0,0,.16);
    }

    .lights { display: flex; gap: 7px; }
    .light { width: 10px; height: 10px; border-radius: 50%; background: #34343a; }
    .light:nth-child(1) { background: #ff5f57; }
    .light:nth-child(2) { background: #febc2e; }
    .light:nth-child(3) { background: #28c840; }

    .console-body { padding: 22px; }

    .metric-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 12px;
      margin-bottom: 18px;
    }

    .metric, .task {
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      background: rgba(0,0,0,.18);
      padding: 15px;
    }

    .metric span, .task span {
      display: block;
      color: var(--dim);
      font-size: 12px;
      margin-bottom: 8px;
    }

    .metric strong, .task strong {
      font-size: 15px;
      color: #f7f8f8;
    }

    .task-list {
      display: grid;
      gap: 10px;
    }

    .task {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .check {
      flex: 0 0 auto;
      width: 20px;
      height: 20px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: rgba(16,185,129,.14);
      color: var(--green);
      border: 1px solid rgba(16,185,129,.28);
      font-size: 12px;
    }

    footer {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: space-between;
      padding-top: 12px;
      color: var(--dim);
      font-size: 13px;
    }

    footer a { color: #d0d6e0; text-decoration: none; }

    @media (max-width: 860px) {
      .page { width: min(100% - 28px, 1120px); }
      main { grid-template-columns: 1fr; min-height: auto; padding-top: 54px; }
      .console { margin-top: 8px; }
      .metric-grid { grid-template-columns: 1fr; }
      header { gap: 14px; align-items: flex-start; }
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <a class="brand" href="/" aria-label="HermentivIO">
        <span class="logo">H</span>
        <span>HermentivIO</span>
      </a>
      <div class="status-pill"><span class="dot"></span>Online en Cloudflare Workers</div>
    </header>

    <main>
      <section>
        <div class="eyebrow">Inventivia Marketing · Asistente IA operativo</div>
        <h1>
          Tu sistema IA,
          <span class="gradient-text">vivo y creciendo.</span>
        </h1>
        <p class="lead">
          HermentivIO es la base técnica del asistente IA de Inventivia: documentación, automatizaciones, agentes especializados y despliegues conectados a GitHub y Cloudflare.
        </p>
        <div class="actions">
          <a class="button primary" href="/health">Ver estado</a>
          <a class="button secondary" href="/status">Ver status</a>
          <a class="button secondary" href="https://github.com/Inventivia/hermentivio">Repositorio GitHub</a>
        </div>
      </section>

      <aside class="console" aria-label="Panel de estado de HermentivIO">
        <div class="console-top">
          <div class="lights"><span class="light"></span><span class="light"></span><span class="light"></span></div>
          <span>worker.status</span>
        </div>
        <div class="console-body">
          <div class="metric-grid">
            <div class="metric"><span>Servicio</span><strong>HermentivIO</strong></div>
            <div class="metric"><span>Owner</span><strong>Inventivia Marketing</strong></div>
            <div class="metric"><span>Deploy</span><strong>GitHub → Cloudflare</strong></div>
            <div class="metric"><span>Estado</span><strong>Operativo</strong></div>
            <div class="metric"><span>Versión</span><strong>0.1.0</strong></div>
            <div class="metric"><span>Módulos</span><strong>landing · health · status</strong></div>
          </div>
          <div class="task-list">
            <div class="task"><div class="check">✓</div><div><span>Repositorio conectado</span><strong>Inventivia/hermentivio</strong></div></div>
            <div class="task"><div class="check">✓</div><div><span>Endpoint de salud</span><strong>/health responde JSON</strong></div></div>
            <div class="task"><div class="check">✓</div><div><span>Siguiente fase</span><strong>Arquitectura y módulos IA</strong></div></div>
          </div>
        </div>
      </aside>
    </main>

    <footer>
      <span>© Inventivia Marketing</span>
      <span>Hecho para trabajar paso a paso, verificar y automatizar.</span>
    </footer>
  </div>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: SERVICE.name,
        owner: SERVICE.owner
      });
    }

    if (url.pathname === "/status") {
      return Response.json({
        ...SERVICE,
        timestamp: new Date().toISOString()
      });
    }

    return new Response(landingHtml, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=60"
      }
    });
  }
};
