# DevSpace - 程序员个人技术博客

一个具有科技感与现代感的个人博客网站，专为北美程序员设计。

## 特性

- 🎨 Minimalist Cyberpunk 设计风格
- 🌙 Dark/Light Mode 切换
- ⌘K 命令面板全局搜索
- 📝 Markdown 文章支持
- 💻 代码语法高亮 + 一键复制
- 📱 响应式设计

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v6

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 部署到 GitHub Pages

### 方法一：GitHub Actions 自动部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. 在 "Build and deployment" 部分，选择 "Source" 为 "GitHub Actions"
4. 推送代码后会自动部署

### 方法二：Vercel 部署（更简单）

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New..." → "Project"
4. 导入你的 GitHub 仓库
5. 点击 "Deploy"，完成后会得到一个免费的 URL

## 自定义

### 修改博客信息

编辑 `src/lib/blog-data.ts` 文件：

- 个人简介和社交链接
- 技术栈展示
- 文章内容

### 修改主题颜色

编辑 `tailwind.config.js` 中的颜色配置。

## 许可证

MIT
