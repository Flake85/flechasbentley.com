FROM node:lts-buster-slim AS build

RUN apt-get -y update \
    && apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
RUN yarn global add @vue/cli
COPY . /app
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=build /app/dist/. /usr/share/nginx/html/.
