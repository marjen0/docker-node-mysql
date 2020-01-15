FROM node:alpine

WORKDIR /src/usr/books

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "app.js"] 