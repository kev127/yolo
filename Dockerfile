FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm imstall
CMD ["npm", "start"]
EXPOSE 8000