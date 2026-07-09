FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./prisma ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "release"]





