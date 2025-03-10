
.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


.PHONY: deploy
deploy: ## Build les assets et deploie le site
	rm -Rf docs/*
	rm -Rf _site/*
	npm run prod
	npm run jekyll_build
	rm -Rf _site/docs
	cp -Rf _site/* docs
	mv docs/htaccess docs/.htaccess
	git add .
	git commit -m "$(MESSAGE)"

node_modules:
	npm i

ruby: 
	sudo yum install ruby ruby-devel
	gem install jekyll bundler
	bundle install