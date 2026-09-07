# AI Design 996 — AI 实践分享

[English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-CN.md)

分享在实际项目中形成的技能和工作方法。欢迎试用，说说真实场景，一起改进下一版。

## Team Leader

**给 AI 项目配一位负责人，带领团队朝正确的方向前进。**

负责人协调产品设计、技术设计、开发与独立 AI 验收，持续比较目标与实际成果，反馈差距并组织修正；项目文档保留有效决定与继续点。

[阅读完整图文介绍](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh.html) · [下载 0.5.16](https://github.com/aidesign996/ai-practice/releases/download/team-leader-v0.5.16/team-leader-0.5.16.zip) · [版本说明与校验文件](https://github.com/aidesign996/ai-practice/releases/tag/team-leader-v0.5.16) · [技能源码](skills/team-leader)

### 安装和开始使用

1. 下载 ZIP 并解压。
2. 将**完整的 `team-leader` 文件夹**放到 `~/.agents/skills/`。Windows 下应能找到 `%USERPROFILE%\.agents\skills\team-leader\SKILL.md`。完整目录共 22 个文件，包含 MIT 许可证；不要只复制 `SKILL.md`。
3. 在 Codex 项目新对话中选择或点名 `$team-leader`，像向团队负责人交代工作一样说明目标：

> 接下来这个项目由你负责。我想做[你的想法]，请先了解现状，明确目标，再带着项目往前推进。请为这个项目建立完整团队，由你负责协调。

实际建队取决于工具支持与用户授权；已有团队会复用原岗位，简单任务可以保持单人。未发现技能时重启 Codex。升级前将旧安装及自定义修改备份到技能目录之外，再替换完整文件夹；保留现有项目文档和目标。

### 适用范围与当前边界

主要面向 Codex 中的 Astra。Sol 已有部分专业岗位实践，但尚未证实全 Sol 团队具有同等效果。团队工作可能消耗较多额度；负责人通常默认 XHigh，按任务安排专业岗位推理级别，并在工具支持时管理上下文。这是工作方法，不能保证技能可以更改每一项运行设置。

0.5.16 在决定采用团队模式且有授权后一次补齐六类职责，工作时按需调动。已检查包内文件完整性、干净目录解压和基础技能结构；新 Codex 配置中的完整首次运行、跨平台、长期纠偏与额度节省尚未系统验证。

### 欢迎反馈

[在文章下方直接留言](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh.html#comments)，一个框里说明场景、遇到的问题，以及你希望怎样处理会更好。**英文、繁体中文和简体中文页面共用同一个公开讨论区**；留言保留原文，所有人都能看到。留言需要 GitHub 登录，阅读无需登录。我会根据反馈继续优化。

Team Leader 技能采用 [MIT 许可证](skills/team-leader/LICENSE)，Copyright (c) 2026 AI Design 996。[设计参考](SOURCES.md)。文章和配图与技能包分别提供。
