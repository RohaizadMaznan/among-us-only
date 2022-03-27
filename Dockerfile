# Install dependecies only when needed
FROM node:lts as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:lts as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /amongusonly/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:lts as runner
WORKDIR /my-project

ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /amongusonly/next.config.js ./
COPY --from=builder /amongusonly/public ./public
COPY --from=builder /amongusonly/.next ./.next
COPY --from=builder /amongusonly/node_modules ./node_modules
COPY --from=builder /amongusonly/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]