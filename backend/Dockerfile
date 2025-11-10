FROM node:20-alpine AS base

WORKDIR /app

FROM base AS production
ENV NODE_ENV=production

COPY node_modules ./node_modules
COPY dist ./dist
COPY package*.json ./

EXPOSE 3001

CMD ["npm", "run", "start:prod"]

