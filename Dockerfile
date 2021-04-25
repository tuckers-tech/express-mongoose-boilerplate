FROM node:14.16.1-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

ENV NODE_ENV production

CMD [ "node", "server.js" ]
