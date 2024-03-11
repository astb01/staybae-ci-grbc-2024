FROM node:18-alpine as build
LABEL service="staybae-ui"
RUN apk add git
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.21.6-alpine
ENV VITE_API_URL 'http://localhost:8080/api'

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/stay-bae.conf

CMD [ "nginx", "-g", "daemon off;" ]