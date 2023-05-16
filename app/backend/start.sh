#! /bin/bash

if [ ! -h /home/backend/node_modules ]
then
	ln -s /home/node_modules /home/backend/node_modules
fi
npm run start:dev