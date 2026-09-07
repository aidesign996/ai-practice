# AI Design 996 — AI practice

[English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-CN.md)

这里分享我做的 AI 技能，以及工作中的思考与实践。你可以直接使用技能，也可以阅读背后的设计与过程。

[分享首页](https://aidesign996.github.io/ai-practice/index.zh.html)

## Skills · 可用技能

可以下载安装，在自己的项目中直接调用。

### Team Leader · 0.5.16

给 AI 项目配一位负责人，协调专业岗位，持续对照用户目标检查实际成果，并组织必要修正。

[下载 Skill](https://github.com/aidesign996/ai-practice/releases/download/team-leader-v0.5.16/team-leader-0.5.16.zip) · [安装与版本说明](https://github.com/aidesign996/ai-practice/releases/tag/team-leader-v0.5.16) · [查看源码](https://github.com/aidesign996/ai-practice/tree/main/skills/team-leader)

## 实践记录

分享设计思路、工作过程和项目成果。

**2026-09-07 · 设计手记**

[为什么我给 AI 项目配了一位负责人](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh.html) — Team Leader 的设计思路：目标与反馈、专业分工、项目知识，以及这套方法目前的适用范围和局限。

## 装好以后，一句话开始

打开项目，选中 Team Leader，或先点名 `$team-leader`。然后说：

> 接下来这个项目由你负责，你跟进一下。

负责人应先了解现有资料、已确认的目标和未完成工作，再继续推进；缺少关键需求时主动问你。你只需要随着沟通，补充自己的想法。

希望采用团队模式时，可以再让负责人建立完整团队并负责协调。实际创建取决于工具支持与用户授权；已有团队会复用原岗位，简单的一次性任务可以保持单人。

### 安装和开始使用

1. 下载 ZIP 并解压，保留完整 team-leader 文件夹，包括方法参考和模板。
2. 个人使用放到 ~/.agents/skills/；只供某个项目使用则放到该项目的 .agents/skills/。Windows 个人安装后应能找到 %USERPROFILE%\.agents\skills\team-leader\SKILL.md。完整包共 22 个文件，含 MIT 许可证，不要只复制 SKILL.md。
3. 在 Codex 项目新对话中选择或点名 $team-leader，确认能够读取，然后说上面的接手语句。未发现技能时重启 Codex。升级前将旧安装及自定义修改备份到技能目录之外，再替换完整文件夹；保留现有项目资料和目标。

### 适用范围与当前边界

主要面向 Codex 中的 Astra。Sol 已有部分专业岗位实践，但尚未证实全 Sol 团队具有同等效果。团队工作可能消耗较多额度；负责人通常以 XHigh 为起点，尊重用户设置，在工具支持时按任务分配专业岗位投入并管理上下文。

0.5.16 在决定采用团队模式且有授权后一次补齐六类职责，工作时按需调动。已检查包内文件完整性、干净目录解压和基础技能结构；新 Codex 配置中的完整首次运行、跨平台、长期纠偏与额度节省尚未系统验证。

## 你的使用反馈，会帮助我改进下一版。

[分享使用反馈](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh.html#comments). 一个留言框里说清场景、遇到的问题，以及你希望怎样处理会更好。英文、繁体和简体页面共用同一个公开讨论区，所有人都能看到原文留言。

留言需要 GitHub 登录，阅读无需登录。我会根据反馈继续优化。

Team Leader 技能采用 MIT 许可证，Copyright (c) 2026 AI Design 996。文章和配图与技能包分别提供。 [MIT](https://github.com/aidesign996/ai-practice/blob/main/skills/team-leader/LICENSE) · [设计参考](SOURCES.md)
