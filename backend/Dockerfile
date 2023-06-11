FROM node:18-alpine

RUN mkdir -p /opt/backend
WORKDIR /opt/backend
#COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000
CMD ["npm", "run", "devStart"]