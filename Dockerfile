# MULTI-STAGE BUILD

# stage 1 : build
FROM node:16-alpine AS build

WORKDIR /MyRead
    
COPY package.json* ./

RUN npm install

COPY . .

RUN npm run build

# stage 2 : runtime

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /MyRead/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
