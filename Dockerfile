FROM node:10.16.3

WORKDIR /app

COPY package.json /app

RUN npm install -g typescript

RUN npm install -g concurrently

RUN npm install --loglevel=error

COPY . /app

CMD ["npm", "run", "start"]