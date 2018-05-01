FROM node:latest

WORKDIR /

COPY package.json /

RUN npm install

RUN npm install -g eslint@^4.9.0 eslint-plugin-import@^2.7.0 babel-eslint

COPY . /

RUN eslint *.js

EXPOSE 5050

CMD [ "npm", "start" ]


