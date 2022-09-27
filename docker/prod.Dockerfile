FROM node:14 AS build

RUN apt-get -y update \
    && apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM nginx:latest
RUN mkdir /app
COPY --from=build /app/dist /app
COPY docker/nginx.conf /etc/nginx/nginx.conf