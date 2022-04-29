FROM node:18 AS build

WORKDIR /proofbot

ADD package.json .
RUN yarn

ADD . .

RUN yarn build

FROM node:18

WORKDIR /proofbot

COPY --from=build /proofbot/package.json .
RUN yarn --production

COPY --from=build /proofbot/dist ./dist

CMD ["node", "dist/index.js"]