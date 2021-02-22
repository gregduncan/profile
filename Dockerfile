# Use Node.js version 15
FROM mhart/alpine-node:15

RUN yarn install
RUN yarn start
