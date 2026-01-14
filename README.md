# H5印度游戏推广页面

基于 Next.js 14 开发的移动端H5游戏推广页面。

## 功能特性

- 🎨 精美的渐变背景和装饰效果
- 📱 完全响应式设计，适配各种移动设备
- ✨ 丰富的动画效果（浮动、闪烁、脉冲等）
- 🎮 游戏图标网格展示
- 📥 下载按钮交互功能
- 🌟 装饰元素（星星、爆炸效果等）

## 技术栈

- Next.js 14
- React 18
- TypeScript
- CSS Modules

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看页面。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
.
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 主页面组件
│   ├── page.module.css     # 页面样式
│   └── globals.css         # 全局样式
├── public/
│   └── res/                # 静态资源文件
├── package.json
├── next.config.js
└── tsconfig.json
```

## 页面元素

- **顶部标题区域**：显示标题图片和Hindi文字
- **主视觉区域**：印度美女手持手机展示游戏界面
- **JACKPOT区域**：大奖提示和下载按钮
- **游戏网格**：6个游戏图标展示
- **底部下载按钮**：最终下载入口

## 注意事项

- 所有图片资源位于 `public/res/` 目录
- 页面已优化为移动端显示
- 支持触摸交互和点击事件
