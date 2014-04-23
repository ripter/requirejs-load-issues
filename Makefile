.PHONY: run

all: build

run: build 
	./bin/server.js

build: node_modules moduleB/dist/bundle.js moduleA/dist/bundle.js moduleC/dist/bundle.js
	touch node_modules

libs: node_modules bower_components

node_modules:
	npm install

bower_components:
	./node_modules/.bin/bower install

moduleB/dist/bundle.js: libs
	node ./bower_components/r.js/dist/r.js -o moduleB/build.config.js

moduleA/dist/bundle.js: libs
	node ./bower_components/r.js/dist/r.js -o moduleA/build.config.js

moduleC/dist/bundle.js: libs
	node ./bower_components/r.js/dist/r.js -o moduleC/build.config.js
