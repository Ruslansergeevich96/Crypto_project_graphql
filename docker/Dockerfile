FROM node:latest

WORKDIR /Crypto_project_graphql

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3500

CMD [ "npm", "start" ]