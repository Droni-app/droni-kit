# ---- Build stage ----
# Construye el Storybook estático de droni-kit.
FROM node:22-alpine AS build
WORKDIR /app

# Evita que Playwright (arrastrado por @storybook/addon-vitest) descargue
# browsers durante el install: el build de Storybook no ejecuta tests.
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build-storybook

# ---- Production stage ----
FROM nginx:alpine
COPY --from=build /app/storybook-static /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
