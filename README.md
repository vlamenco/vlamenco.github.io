# Vlamenco's Blog

这是一个基于HTML、CSS和JavaScript的个人博客网站，采用清新的多巴胺风格设计，使用GitHub作为存储方式。

## 项目结构

vlamenco-blog/                 # 项目根目录
├── .github/                   # GitHub配置文件
├── archetypes/                # 文章模板
├── assets/                    # 静态资源
│   ├── css/                   # 自定义CSS
│   ├── js/                    # 交互JavaScript
│   └── images/                # 图片资源
│       ├── header-image.jpg   # 主页面大图像
│       └── profile.jpg        # 个人照片
├── content/                   # 文章内容（markdown文件）
│   ├── book/                  # Book分类文章
│   ├── photo/                 # Photo分类文章
│   ├── music/                 # Music分类文章
│   ├── movie/                 # Movie分类文章
│   ├── voyage/                # Voyage分类文章
│   ├── english/               # English分类文章
│   ├── francaise/             # Française分类文章
│   ├── arabic/                # اللغة العربية分类文章
│   ├── macrame/               # Macrame分类文章
│   └── daily/                 # Daily分类文章
├── layouts/                   # 自定义布局
├── static/                    # 静态文件
├── themes/                    # 主题目录
│   └── dot-org-hugo-theme/    # 引入的cncf主题
├── config/                    # 配置文件
├── package.json               # 项目依赖
├── postcss.config.js          # PostCSS配置
└── README.md                  # 项目说明

## 功能特点

- 清新的多巴胺风格设计，色彩明亮活泼
- 响应式布局，适配各种屏幕尺寸
- 左侧导航栏，包含所有分类
- 文章以Markdown格式存储，便于编辑和管理
- 文章列表页展示标题、日期和缩略图
- 文章详情页支持Markdown渲染
- 标签云功能，便于内容分类和检索
- 评论功能，支持读者互动

## 使用方法

1. 将项目克隆到本地
2. 在content目录下的对应分类中添加Markdown格式的文章
3. 替换assets/images目录下的图片为你自己的图片
4. 将代码推送到GitHub仓库
5. 可以使用GitHub Pages部署你的博客

## 自定义

- 可以通过修改Tailwind配置更改网站配色
- 可以在assets/css目录下添加自定义CSS
- 可以在assets/js目录下添加自定义JavaScript功能
- 可以修改布局文件更改网站结构
