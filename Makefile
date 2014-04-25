.PHONY: run

all: build

run: build 
	./bin/server.js

build: node_modules collection-manager studio
	touch node_modules

libs: node_modules bower_components

node_modules:
	npm install

bower_components:
	./node_modules/.bin/bower install

collection-manager: libs
	node ./bower_components/r.js/dist/r.js -o collection-manager/build.js

studio: libs
	node ./bower_components/r.js/dist/r.js -o studio/build.js
