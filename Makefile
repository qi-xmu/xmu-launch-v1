

all: dev 

# 1 安装环境
env: tools/coscli install

tools/coscli:
	mkdir tools
	wget -O ./tools/coscli "https://cosbrowser.cloud.tencent.com/software/coscli/coscli-linux"
	chmod +x ./tools/coscli

install: node_modules
node_modules:
	npm install

# 2 开发
dev: node_modules
	npm run dev
# 2.1 测试
test:build
	yarn preview

# 3 部署代码
.PHONY: dist
build:dist
dist: 
	npm run build

deploy: env dist 
	./tools/coscli -c ./tools/.cos.yaml sync -r dist cos://qi

deploy-clean:
	./tools/coscli -c ./tools/.cos.yaml rm -rf cos://qi/