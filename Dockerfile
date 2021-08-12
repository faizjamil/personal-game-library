# using the default base image for v14 of node
FROM node:14
# app's port is set to 3000 by default, we expose that
EXPOSE 3000
WORKDIR /app
# selectively copies the package and package-lock files to faciliate multi-stage builds
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci
# RUN commands are triggered while building image
# CMD commands are triggered while launching the image
# in other words, for this project, we want to fun something like
# npm test
# copies rest of project files besides what is specified in .dockerignore
COPY . .
CMD npm test