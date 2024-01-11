FROM node:20-alpine as base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN \
  if [ -f pakcage-lock.json ]; then  npm ci; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build