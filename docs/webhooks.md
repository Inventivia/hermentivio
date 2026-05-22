# Webhooks seguros de HermentivIO

HermentivIO tiene una primera ruta preparada para recibir eventos externos:

```text
POST /webhooks/ping
```

URL de producción:

```text
https://hermentivio.contacto-0dc.workers.dev/webhooks/ping
```

## Seguridad

Este endpoint no acepta eventos si no está configurado el secreto `WEBHOOK_SECRET` en Cloudflare Workers.

El cliente debe enviar una cabecera:

```text
x-hermentivio-secret: <WEBHOOK_SECRET>
```

Reglas:

- No subir nunca el secreto a GitHub.
- No poner el secreto en `README.md` público.
- Guardarlo como secreto del Worker en Cloudflare.
- Usarlo desde n8n, Make, Zapier u otra automatización como cabecera HTTP privada.

## Comportamiento

### Sin secreto configurado en Cloudflare

Respuesta esperada:

```json
{
  "ok": false,
  "error": "webhook_secret_not_configured"
}
```

### Con secreto incorrecto

Respuesta esperada:

```json
{
  "ok": false,
  "error": "unauthorized"
}
```

### Con secreto correcto

Ejemplo de petición:

```bash
curl -X POST \
  "https://hermentivio.contacto-0dc.workers.dev/webhooks/ping" \
  -H "content-type: application/json" \
  -H "x-hermentivio-secret: $WEBHOOK_SECRET" \
  -d '{"event":"ping","source":"n8n"}'
```

Respuesta esperada:

```json
{
  "ok": true,
  "received": true,
  "service": "HermentivIO",
  "event": "ping",
  "timestamp": "..."
}
```

## Para qué sirve

Esta ruta es la primera puerta segura para que otros sistemas avisen a HermentivIO.

Usos previstos:

- n8n avisa cuando termina una automatización.
- Un formulario web envía un evento.
- Un sistema externo manda una señal de prueba.
- Futuras integraciones pueden comprobar que HermentivIO recibe eventos.

## Importante

La ruta existe públicamente porque Cloudflare Workers es público, pero no procesa eventos privados sin el secreto correcto.
