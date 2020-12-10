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
RUN mkdir /app
COPY --from=build /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf