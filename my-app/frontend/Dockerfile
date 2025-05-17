# Stage 1: Build the Vite app
FROM node:18-alpine AS build

# makes a docker container with working directory/ root directory "app"
WORKDIR /app

# copies packages over
COPY package.json package-lock.json ./

# installs packages
RUN npm install --legacy-peer-deps

# copies all files from local project directory over to the docker container's "app" directory
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]