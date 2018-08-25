all: help

help:
	cat Makefile

docker-build:
	docker-compose build

build:
	docker-compose run --rm jekyll bundle exec jekyll build

build-v:
	docker-compose run --rm jekyll bundle exec jekyll build -V

start:
	docker-compose up -d

up:
	docker-compose up

stop:
	docker-compose stop

down:
	docker-compose down --remove-orphans -v

logs:
	docker-compose logs --tail="all" -f

ps:
	docker-compose ps
