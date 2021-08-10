# USAGE:
# make <command> <environment_file>
# --
# EXAMPLES:
# make up .env
# make up-db .env.dev

include ${1}

.PHONY: up

up:
	docker-compose up

.PHONY: down

down:
	docker-compose down

.PHONY: up-db

up-db:
	docker-compose up db
