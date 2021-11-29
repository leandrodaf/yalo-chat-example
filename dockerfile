FROM node:16-alpine as base

WORKDIR /src

COPY package*.json /

EXPOSE 3001

COPY . /

RUN npm install
