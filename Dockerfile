FROM node:18 AS build

WORKDIR /proofbot

ADD . .

RUN yarn

RUN yarn build

FROM node:18

WORKDIR /proofbot

COPY --from=build /proofbot/package.json .
COPY --from=build /proofbot/dist ./dist

RUN yarn --production

CMD ["node", "dist/index.js"]