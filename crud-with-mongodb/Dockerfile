FROM node:18.15.0

WORKDIR /code

COPY package.json package.json

RUN npm install

COPY . .

CMD [ "node", "app.js" ]
