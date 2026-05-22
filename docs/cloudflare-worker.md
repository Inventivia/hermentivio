# Despliegue en Cloudflare Workers

Este repositorio está preparado para desplegar un Worker básico de HermentivIO.

## Configuración en Cloudflare

- Project name: `hermentivio`
- Build command: dejar vacío
- Deploy command: `npx wrangler deploy`
- Non-production branch deploy command: `npx wrangler versions upload`
- Path: `/`
- API token: crear uno nuevo automáticamente desde Cloudflare si lo ofrece la interfaz

## Rutas iniciales

- `/` muestra un mensaje de estado básico.
- `/health` devuelve JSON de salud.

## Nota

No subir secretos al repositorio. Usar variables/secrets de Cloudflare para claves reales.
