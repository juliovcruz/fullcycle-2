FROM node:latest

WORKDIR /usr/app

COPY ./api/package.json .

RUN npm install

COPY ./api .

EXPOSE 3000

CMD [ "npm", "start" ]
