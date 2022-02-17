FROM node:17-alpine

WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .

CMD yarn start:dev
