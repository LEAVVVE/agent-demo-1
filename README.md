# 番茄钟计时器（Vanilla JS）

一个使用原生 **HTML + CSS + JavaScript** 编写的最小可运行前端小工具，适合初学者阅读和修改。

## 功能

- 自定义专注时长（分钟）
- 自定义休息时长（分钟）
- 开始计时
- 暂停 / 继续计时
- 重置计时
- 倒计时显示，并在专注/休息模式之间自动切换

## 项目结构

```text
.
├── index.html   # 页面结构
├── style.css    # 页面样式
├── script.js    # 计时逻辑
└── README.md    # 项目说明
```

## 本地运行

你可以直接双击打开 `index.html`，也可以用一个静态服务器运行：

```bash
python3 -m http.server 8000
```

然后访问：`http://localhost:8000`

## 使用 GitHub Pages 在线查看

1. 将代码推送到 GitHub 仓库（例如 `main` 分支）。
2. 进入仓库页面：`Settings` → `Pages`。
3. 在 **Build and deployment** 下：
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择你的分支（如 `main`）和根目录 `/ (root)`
4. 点击保存，等待几十秒到几分钟。
5. GitHub 会生成在线地址（通常形如 `https://<你的用户名>.github.io/<仓库名>/`）。

---

如果你想扩展这个项目，可以继续添加：
- 完成一轮番茄后的提示音
- 今日番茄统计
- 深色模式切换
