FROM node:14-alpine AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build
RUN cp -R src/graphql/types/**/*.graphql build/graphql/types
RUN cp -R src/graphql/types/*.graphql build/graphql/types
RUN yarn install

EXPOSE 3000

CMD [ "node", "build/server.js" ]
