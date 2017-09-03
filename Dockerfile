FROM node:alpine

WORKDIR /opt/table-tennis-web

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 8000

ENTRYPOINT ["npm", "run"]

CMD ["development"]