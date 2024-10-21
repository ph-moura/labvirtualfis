all:
	npm run build
deploy: all
	gh-pages -d out/ --nojekyll --cname labvirtualfis.com.br
