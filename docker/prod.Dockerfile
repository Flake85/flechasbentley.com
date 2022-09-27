FROM node:lts-alpine AS build

RUN apk -y update \
    && apk autoremove -y \
    && apk autoclean -y \
    && apk clean -y \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM nginx:latest
RUN mkdir /app
COPY --from=build /app/dist /app
COPY docker/nginx.conf /etc/nginx/nginx.conf