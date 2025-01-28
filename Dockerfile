# 1: Build the Angular application
# Base image for the build step
FROM node:20.9.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy all project files into the container
COPY . $WORKDIR

# Install Yarn globally, install project dependencies, and build the Angular application in production mode
RUN npm install -g yarn --force && \
    yarn install --frozen-lockfile --no-optional && \
    yarn build


# 2: Serve the application using Nginx
# Lightweight Nginx image for serving the application
FROM nginx:1.26.2-alpine

# Copy the built Angular application from the previous stage into the Nginx HTML directory
COPY --from=build /app/dist/angular-conduit /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx in the foreground
# standard command in ngnix:1.26.2-alpine is CMD ["nginx", "-g", "daemon off;"]