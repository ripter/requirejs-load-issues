.PHONY: run

all: build

run: build 
	./bin/server.js

build: node_modules moduleB/dist/bundle.js


node_modules:
	npm install

bower_components:
	./node_modules/.bin/bower install

moduleB/dist/bundle.js: node_modules bower_components
	node ./bower_components/r.js/dist/r.js -o moduleB/build.config.js
