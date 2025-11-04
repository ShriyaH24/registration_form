# Use PHP Apache base image
FROM php:8.2-apache

# Copy all project files into the Apache document root
COPY . /var/www/html/

# Expose port 80 for Render
EXPOSE 80