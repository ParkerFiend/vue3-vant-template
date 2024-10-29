# 基于 Vue3 + vant 搭建的移动端项目模板

集成所有主流技术栈，开箱即用

## 项目架构

本项目采用了前端框架`Vue3` + `Vite`搭建的单页面移动端应用。

结合`Pinia`进行状态管理，使用`Axios`实现后端数据交互。

## 快速开始

### 环境准备

1. node v20+
2. nvm

### 基础命令

```Bash
# 安装依赖
pnpm i

# 本地开发启动
pnpm run dev

# 提交代码 （存储变更文件后）
pnpm run commit

# 打包代码
pnpm run build
```

## 技术实现

### 目录结构

```
vue3-vant-template/
├── build/                 # 构建配置
├── public/                # 静态资源目录
├── src/                   # 源代码目录
│   ├── api/               # API服务层
│   ├── assets/            # 静态资源文件（图片、字体等）
│   ├── components/        # 可复用的全局组件
│   ├── composables/       # 复用的hook函数
│   ├── router/            # 路由配置
│   ├── scss/              # 样式文件
│   ├── store/             # Pinia状态管理
│   ├── utils/             # 工具函数
│   ├── views/             # 页面组件
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── types/                 # ts类型定义
├── index.html             # HTML模板文件
├── .env                   # 环境变量文件
├── eslint.config.js       # ESLint配置文件
├── package.json           # 项目配置文件
└── vite.config.ts         # Vite配置文件
```

## 后续优化

- [ ] 完善文档

- [ ] 更新eslint-import
