
.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


.PHONY: deploy
deploy: ## Build les assets et deploie le site
	rm -Rf docs/*
	rm -Rf _site/*
	npm run prod
	npm run jekyll_build
	cp -Rf _site/* docs
	cp .htaccess docs/
	git add .
	git commit -m "$(MESSAGE)"
