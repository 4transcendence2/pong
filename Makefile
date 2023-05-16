FRONTEND = $(HOME)/goinfre/frontend
BACKEND = $(HOME)/goinfre/backend

all :
	-@git clone git@github.com:4transcendence2/frontend.git $(FRONTEND)
	-@git -C $(FRONTEND) pull
	-@git clone git@github.com:4transcendence2/backend.git $(BACKEND)
	-@git -C $(BACKEND) pull
	cp -f $(FRONTEND)/package.json ./app/frontend/
	cp -f $(BACKEND)/package.json ./app/backend/
	@docker compose build --no-cache
	@docker compose up -d
	
clean :
	docker compose down
	-docker images | awk 'NR > 1 { print $$3 }' | xargs docker rmi
	-docker system prune -af
	-docker volume ls | awk 'NR > 1 { print $$2 }' | xargs docker volume rm

prune :
	rm -rf $(FRONTEND)
	rm -rf $(BACKEND)

re :
	@make clean
	@make
