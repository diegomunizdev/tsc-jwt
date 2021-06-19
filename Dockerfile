# from base image node
FROM node:alpine

WORKDIR /usr/app

# copying all the files from your file system to container file system
COPY package*.json ./
# install all dependencies
RUN npm install

# copy oter files as well
COPY . .

#expose the port
EXPOSE 3001

# command to run when intantiate an image
CMD ["npm","start"]