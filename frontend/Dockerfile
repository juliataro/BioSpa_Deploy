FROM node:19-alpine AS build

WORKDIR /app
ENV . /env
COPY frontend/package*.json  ./
RUN ls -l
RUN npm i
RUN npm i react

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

COPY frontend ./
RUN ls -l
RUN npm run build

#RUN npm run build

#FROM nginx:1.20.2-alpine
#COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "start"]