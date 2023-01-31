# FROM node:18-alpine
FROM node:16.15.0-alpine 

LABEL authors="Muhammed sufiyan PK, Fouzan KV"

COPY package*.json yarn.lock ./

RUN yarn install

COPY . . 

CMD ["yarn", "run", "dev"]
