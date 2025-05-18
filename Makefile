# Makefile for deploying Vite + React site to GitHub Pages

install:
	npm install

build:
	npm run build

deploy:
	npm run deploy

preview:
	npm run preview

clean:
	rm -rf dist
