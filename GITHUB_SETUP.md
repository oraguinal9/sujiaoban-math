# GitHub 部署指南

##  上传到 GitHub

### 方式一：命令行（推荐）

```bash
# 1. 在 GitHub 上创建新仓库（不要勾选"初始化"选项）
# 仓库名建议：sujiaoban-math 或 math-review

# 2. 进入项目目录
cd /Users/hello/openclaw-workspace/sujiaoban-math

# 3. 初始化 Git（如果还没初始化）
git init

# 4. 添加远程仓库（替换为你的 GitHub 用户名和仓库名）
git remote add origin https://github.com/YOUR_USERNAME/sujiaoban-math.git

# 5. 添加所有文件
git add .

# 6. 提交
git commit -m "Initial commit: 苏教版初中数学复习工具"

# 7. 推送到 GitHub
git push -u origin main
```

### 方式二：使用 GitHub Desktop

1. 打开 GitHub Desktop
2. File → Add Local Repository → 选择 `sujiaoban-math` 文件夹
3. File → Publish Repository
4. 填写仓库名，点击 "Publish"

---

## 🌐 启用 GitHub Pages（可选）

如果想让别人直接访问这个工具：

1. 推送到 GitHub 后，进入仓库页面
2. Settings → Pages
3. Source 选择 `main` 分支，文件夹选 `/ (root)`
4. 点击 Save
5. 几分钟后访问：`https://YOUR_USERNAME.github.io/sujiaoban-math/`

---

## 📝 推荐仓库信息

**仓库名**: `sujiaoban-math` 或 `math-review`

**描述**: 
```
苏教版初中数学复习工具 - 专为初中生打造的课外复习网页工具
考点速查 · 公式速记 · 智能刷题 · 错题本
```

**标签**:
- education
- math
- jiangsu
- review-tool
- static-website

**许可证**: 建议选 MIT（开源教育项目）

---

## 🔒 注意事项

1. **不要上传的内容**:
   - `.DS_Store` 等系统文件（已添加到 .gitignore）
   - 任何个人数据或答案文件

2. **可以安全上传**:
   - 所有代码文件（HTML/CSS/JS）
   - README.md 等文档
   - 配置文件（manifest.json, sw.js）

3. **隐私说明**:
   - 本项目使用 localStorage 存储数据
   - 所有数据保存在用户本地，不会上传到服务器
   - 适合部署为静态网站

---

## ✅ 上传前检查清单

- [ ] 已在 GitHub 创建仓库
- [ ] 已配置远程仓库地址
- [ ] 已添加 .gitignore
- [ ] 代码已通过测试（打开 index.html 能正常运行）
- [ ] README.md 信息准确
- [ ] 没有敏感数据

---

## 🎯 后续维护

```bash
# 每次修改后推送
git add .
git commit -m "描述你的修改"
git push
```
