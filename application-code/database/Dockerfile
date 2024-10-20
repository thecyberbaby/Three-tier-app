# Dockerfile for the init container
FROM node:14

WORKDIR /app

# Copy the seed script
COPY seed.js .

# Install the MongoDB driver
RUN npm install mongodb

# Command to run the seed script
CMD ["node", "seed.js"]
