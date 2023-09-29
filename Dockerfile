FROM node:16-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

FROM development as production

RUN npm run build

RUN npm ci --production
