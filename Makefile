

all: dev 

env: tools/coscli install

tools/coscli:
	wget -O ./tools/coscli "https://cosbrowser.cloud.tencent.com/software/coscli/coscli-linux"
	chmod +x ./tools/coscli

install: node_modules
node_modules:
	npm install

dev: node_modules
	npm run dev

.PHONY: dist
dist: 
	npm run build

deploy: env dist 
	./tools/coscli -c ./tools/.cos.yaml sync -r dist cos://qi