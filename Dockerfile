FROM node:18

WORKDIR /proofbot

ADD . .

RUN yarn

RUN yarn build

CMD ["node", "dist/index.js"]