# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Set environment variable for the port
ENV PORT 3001

# Start the app
CMD ["serve", "-s", "build", "-l", "3001"]

# Expose the port on which the app will run
EXPOSE 3001
