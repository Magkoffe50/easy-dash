FROM node:20-alpine AS base

WORKDIR /app

FROM base AS dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base AS production
ENV NODE_ENV=production
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

EXPOSE 3001

CMD ["npm", "run", "start:prod"]

