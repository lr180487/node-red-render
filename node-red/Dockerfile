FROM node:22.16.0-bookworm-slim

ENV NODE_ENV=production
ENV PORT=10000
ENV FLOWS=flows.json
WORKDIR /usr/src/node-red

COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund

COPY settings.js ./settings.js
COPY README.md ./README.md
COPY packages/ ./packages/
COPY scripts/ ./scripts/
COPY test/ ./test/

RUN mkdir -p /data && chown -R node:node /usr/src/node-red /data
USER node
EXPOSE 10000
CMD ["sh", "-c", "node_modules/.bin/node-red --userDir /data --settings /usr/src/node-red/settings.js --port ${PORT:-10000}"]
