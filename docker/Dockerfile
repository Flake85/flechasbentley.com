FROM node:lts-buster-slim

RUN apt-get -y update \
    && apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
RUN yarn global add @vue/cli
WORKDIR /app
COPY package.json ./app/package.json
RUN yarn install

EXPOSE 8080
USER node
CMD ["yarn", "serve"]