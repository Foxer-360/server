FROM node:11.10.1

WORKDIR /usr/src/server

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
EXPOSE 5001
EXPOSE 8000
EXPOSE 8001

CMD ["yarn", "start"]
CMD ["npx", "prisma", "deploy"]
