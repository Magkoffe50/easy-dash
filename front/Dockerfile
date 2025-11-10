FROM node:20-alpine AS base

WORKDIR /app

FROM base AS dependencies
COPY package*.json ./
RUN npm install

FROM base AS build
ARG NEXT_PUBLIC_API_URL=http://localhost:3001
ARG NEXT_PUBLIC_APP_ENV=production
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN if [ -d ".next/standalone" ] && [ -d ".next/static" ]; then echo "Using prebuilt .next"; else NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL} NEXT_PUBLIC_APP_ENV=${NEXT_PUBLIC_APP_ENV} npm run build; fi

FROM base AS production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

