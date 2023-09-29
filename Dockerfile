FROM node:16-alpine as base

WORKDIR /usr/src/app

COPY package*.json .

FROM base as development

RUN npm ci

COPY . .

FROM base as production

RUN npm ci --production

COPY . .

RUN npm run build
