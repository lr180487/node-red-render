# Node-RED en Render (Docker)

Proyecto de ejecución de Node-RED 5.0.10 preparado para desplegarse en Render mediante Docker.

## Estructura

```text
node-red/
├── Dockerfile
├── .dockerignore
├── render.yaml
├── package.json
├── package-lock.json
├── settings.js
├── packages/
├── scripts/
├── test/
└── README.md
```

## Ejecutar localmente

Requisitos: Docker instalado.

```bash
docker build -t node-red-render .
docker run --rm -p 1880:10000 -e PORT=10000 -v node_red_data:/data node-red-render
```

Abrir `http://localhost:1880`.

## Desplegar en Render

1. Sube el contenido de esta carpeta a la raíz de un repositorio GitHub.
2. En Render, selecciona **New + → Blueprint** y conecta el repositorio, o crea un Web Service con Runtime **Docker**.
3. Render detectará `render.yaml` y construirá la imagen usando `Dockerfile`.
4. Revisa los logs y confirma que Node-RED inicia y escucha en el puerto indicado por `PORT`.

## Persistencia y seguridad

- El directorio de usuario es `/data`. En el plan Free de Render el sistema de archivos no es persistente; los flujos y credenciales pueden perderse al reiniciar o desplegar. Para persistencia, usa un plan que admita Persistent Disk y móntalo en `/data`.
- Antes de publicar el editor en Internet, configura `adminAuth` en `settings.js` con un hash seguro y guarda los secretos como variables de entorno. No expongas el editor sin autenticación.
- Define `NODE_RED_CREDENTIAL_SECRET` como secreto largo y aleatorio para cifrar credenciales de flujos.
- No incluyas `.env`, contraseñas, tokens ni certificados privados en Git.

## Comprobación

```bash
npm test
```

Este repositorio contiene el runtime Node-RED como dependencia npm; `packages/` y `scripts/` son directorios reservados para extensiones propias, no una copia del repositorio fuente completo de Node-RED.
