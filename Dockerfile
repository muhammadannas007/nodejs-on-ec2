FROM node:latest
WORKDIR /nodeapp
ADD . .
RUN npm install
