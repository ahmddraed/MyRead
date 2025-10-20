# ---------- build stage ----------
FROM node:18-alpine AS build

# Set working dir
WORKDIR /MyRead

# Copy package files and install (use cache layer)
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source
COPY . .

# Build production bundle
RUN npm run build

# ---------- runtime stage ----------
FROM nginx:stable-alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from build stage
COPY --from=build /MyRead/build /usr/share/nginx/html

# Copy custom nginx config (optional, see nginx.conf below)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
