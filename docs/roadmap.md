# Roadmap de HermentivIO

## Fase 1 — Base pública operativa

Estado: en marcha.

Objetivo: tener una base mínima, segura y desplegada.

Hecho:

- Repositorio GitHub creado.
- Cloudflare Worker conectado.
- Landing inicial publicada.
- Endpoint `/health` activo.
- Estructura base del proyecto creada.

Pendiente:

- Añadir página de estado más completa.
- Añadir versión visible del sistema.
- Añadir documentación de arquitectura y decisiones.

## Fase 2 — Panel de control inicial

Objetivo: que HermentivIO no sea solo una landing, sino un pequeño panel de estado.

Tareas:

1. Crear ruta `/status`.
2. Mostrar versión, fecha de deploy y módulos disponibles.
3. Mantener `/health` simple y sin datos sensibles.
4. Añadir enlaces a GitHub y documentación.
5. Crear tests básicos o verificación automática.

## Fase 3 — Integración con automatizaciones

Objetivo: preparar HermentivIO para recibir eventos y conectar herramientas.

Tareas:

1. Diseñar webhooks seguros.
2. Definir firma o token por cabecera.
3. Documentar integración con n8n.
4. Crear endpoint inicial `/webhooks/ping`.
5. Registrar eventos mínimos sin exponer datos privados.

## Fase 4 — Integración con Hermes/Telegram

Objetivo: conectar HermentivIO con el flujo real de trabajo de Francisco.

Tareas:

1. Definir qué mensajes o comandos deben llegar a HermentivIO.
2. Diseñar respuestas seguras.
3. Documentar límites entre Hermes Agent y HermentivIO.
4. Crear endpoints internos si hacen falta.

## Fase 5 — Agentes especialistas

Objetivo: organizar capacidades por áreas de negocio.

Módulos previstos:

- SEO y SEO local.
- WordPress/Divi.
- Captación y ofertas.
- Automatizaciones IA.
- Operaciones internas.

## Prioridad inmediata

La siguiente tarea recomendada es crear `/status`.

Debe devolver una página o JSON con:

```json
{
  "service": "HermentivIO",
  "status": "online",
  "version": "0.1.0",
  "modules": ["landing", "health", "status"]
}
```
