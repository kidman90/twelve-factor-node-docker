FROM node:latest
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
CMD node express.js
EXPOSE 8080
