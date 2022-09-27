FROM node:lts-buster-slim AS build

RUN apt-get -y update \
    && apt-get install -y git
RUN yarn global add @vue/cli
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
RUN apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

FROM nginx:latest
RUN mkdir /app
COPY --from=build /app/dist /app
COPY docker/nginx.conf /etc/nginx/nginx.conf