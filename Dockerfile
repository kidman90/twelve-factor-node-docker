FROM mhart/alpine-node
WORKDIR /srv
COPY . .
RUN mkdir uploads
RUN yarn
EXPOSE 8080
CMD node express.js