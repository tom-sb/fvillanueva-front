FROM node:20.12-alpine AS build

WORKDIR /usr/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build:prod

FROM nginx:alpine

WORKDIR /usr/app

COPY --from=build /usr/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]