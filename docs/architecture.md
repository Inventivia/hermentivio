# Arquitectura inicial de HermentivIO

HermentivIO empieza como un Worker ligero desplegado en Cloudflare y conectado a GitHub. Esta base permite tener una URL pública, un endpoint de salud y una ruta clara para ir añadiendo módulos sin comprometer secretos ni mezclar código experimental con configuración real.

## Objetivo

Crear un sistema IA operativo para Inventivia Marketing que ayude a Francisco a:

- Reducir trabajo manual.
- Documentar procesos y decisiones.
- Coordinar agentes especializados.
- Conectar automatizaciones útiles para ventas, SEO, WordPress/Divi y gestión interna.
- Evolucionar de forma segura, verificable y paso a paso.

## Estado actual

```text
GitHub repo: Inventivia/hermentivio
Deploy: Cloudflare Workers
URL pública: https://hermentivio.contacto-0dc.workers.dev
Health endpoint: /health
```

## Componentes

### 1. Worker público

Archivo principal:

```text
src/index.js
```

Responsabilidades actuales:

- Servir la landing inicial.
- Exponer `/health`.
- Confirmar que el despliegue GitHub → Cloudflare funciona.

Responsabilidades futuras:

- Recibir webhooks seguros.
- Actuar como panel público o privado ligero.
- Exponer rutas de estado y diagnóstico.

### 2. Documentación

Carpeta:

```text
docs/
```

Responsabilidades:

- Documentar visión, arquitectura y fases.
- Guardar decisiones técnicas.
- Evitar depender de memoria informal.

### 3. Configuración segura

Carpeta:

```text
config/
```

Regla principal:

- Nunca subir secretos reales.
- Usar solo plantillas como `.env.example`.

Los secretos reales deben vivir en:

- Cloudflare Workers Secrets.
- GitHub Secrets.
- Configuración local del VPS.

### 4. Código de aplicación

Carpeta:

```text
src/
```

Evolución prevista:

- Router de rutas.
- Módulo de seguridad.
- Módulo de integraciones.
- Módulo de respuestas del asistente.
- Módulo de panel/estado.

### 5. Scripts auxiliares

Carpeta:

```text
scripts/
```

Uso previsto:

- Verificaciones.
- Deploys manuales.
- Diagnóstico.
- Automatizaciones de desarrollo.

## Integraciones previstas

### Fase 1 — Base estable

- GitHub.
- Cloudflare Workers.
- Endpoint `/health`.
- Documentación inicial.

### Fase 2 — Panel útil

- Página de estado más completa.
- Registro de módulos activos.
- Información de versión y último deploy.
- Enlaces a documentación y repositorio.

### Fase 3 — Automatizaciones

- Webhooks seguros.
- Integración con n8n.
- Integración con Telegram/Hermes.
- Registro de eventos importantes.

### Fase 4 — Agentes especialistas

Posibles módulos:

- `hermes-seo`: SEO y SEO local.
- `hermes-dev`: desarrollo WordPress/Divi y automatizaciones.
- `hermes-cmo`: marketing, ofertas y contenidos.
- `hermes-ops`: operaciones, tareas y sistemas.
- `hermes-life`: apoyo personal/productividad.

## Seguridad

Principios obligatorios:

- No subir tokens a GitHub.
- No subir `.env` reales.
- Usar `/health` sin datos sensibles.
- Separar documentación pública de credenciales privadas.
- Verificar cada deploy antes de marcar una tarea como hecha.

## Decisiones actuales

- Cloudflare Workers es suficiente para la primera capa pública.
- GitHub es la fuente de verdad del código.
- La documentación vive junto al código para mantener continuidad.
- HermentivIO debe crecer por fases pequeñas y verificables.
