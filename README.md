# XMU LAUNCH Project 厦大专属启动页

### 开始项目

本项目基于docker容器内开发，支持Windows/Mac/Linux系统。
配置docker开发容器方法，参考[安装视频](https://secure-bigfile.wostatic.cn/static/9gvTVX3m35m4pGfCpxXq3N/dev-container.mp4?auth_key=1661584147-gsGMqJs1Y5awKEgRCDLQKQ-0-ffc78351d0d9804da90bf9bff1f5ffbe)

进入容器中后，使用如下指令初始化环境。

```bash
make env
```

使用如下指令开始调试

```bash
make
```

使用如下指令进行部署

```bash
make deploy
```
注意，部署需要cos工具coscli，如果想自行部署到自己的服务器或者存储桶，可以直接`dist/`.


# 项目其他说明

### Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

#### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
