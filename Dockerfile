# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the HTML, CSS, JavaScript, and any other assets into the container
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
