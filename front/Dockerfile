FROM node:latest

WORKDIR /usr/app

COPY ./front/package.json .

RUN npm install

COPY ./front .

EXPOSE 3000

CMD [ "npm", "start" ]
