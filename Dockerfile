# Install dependecies only when needed
FROM node:lts as dependencies
WORKDIR /among-us-only
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
# LABEL org.opencontainers.image.source="https://github.com/rohaizadmaznan/among-us-only"

# Rebuild the source code only when needed
FROM node:lts as builder
WORKDIR /among-us-only
COPY . .
COPY --from=dependencies /among-us-only/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:lts as runner
WORKDIR /among-us-only

ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /among-us-only/next.config.js ./
COPY --from=builder /among-us-only/public ./public
COPY --from=builder /among-us-only/.next ./.next
COPY --from=builder /among-us-only/node_modules ./node_modules
COPY --from=builder /among-us-only/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]