# AI Design 996 — AI practice

[English](https://aidesign996.github.io/ai-practice/index.html) · [繁體中文](https://aidesign996.github.io/ai-practice/index.zh-hant.html) · [简体中文](https://aidesign996.github.io/ai-practice/index.zh.html)

I share reusable AI skills and the thinking behind my work. Pick a skill to use, or explore the notes behind it.

[Sharing home](https://aidesign996.github.io/ai-practice/index.html)

## Skills

Installable skills you can use in your own projects.

### Team Leader · 0.5.16

Give your AI project a team lead. It coordinates specialist roles, compares results with your goal, and follows through on corrections.

[Download Skill](https://github.com/aidesign996/ai-practice/releases/download/team-leader-v0.5.16/team-leader-0.5.16.zip) · [Installation & release notes](https://github.com/aidesign996/ai-practice/releases/tag/team-leader-v0.5.16) · [View source](https://github.com/aidesign996/ai-practice/tree/main/skills/team-leader)

## Practice & notes

Design decisions, working methods and project reflections.

**2026-09-07 · Design notes**

[Why I built an AI team lead](https://aidesign996.github.io/ai-practice/team-leader/) — The ideas behind Team Leader: goals and feedback, specialist roles, project knowledge, and the current limits of the method.

## Start with one sentence

After installation, open your project and select Team Leader, or name `$team-leader` first. Then say:

> You're in charge of this project now. Please take it forward.

The lead should read the available project context, recover agreed goals and unfinished work, and take it forward. If essential requirements are missing, it should ask you. Share your ideas as the conversation develops.

If you want team mode, ask the lead to establish the complete team and coordinate it. Creation requires the host's tools and your authorization. Existing teams are reused; simple one-off tasks can remain solo.

### Install and start

1. Download the ZIP and extract it. Keep the complete team-leader folder, including its references and templates.
2. Place it in `~/.agents/skills/` for personal use, or `.agents/skills/` within one project. On Windows, a personal installation should contain `%USERPROFILE%\.agents\skills\team-leader\SKILL.md`. The package contains 22 files including the MIT license; do not copy only SKILL.md.
3. In a new Codex project conversation, select or name `$team-leader`, confirm it is readable, and use the sentence above. If the skill is not discovered, restart Codex. Back up an existing installation and local changes outside the skills directory before replacing the whole folder; preserve project records and goals.

### Fit and current limits

Primarily designed for Astra in Codex. Some specialist work has used Sol, but equivalent all-Sol results have not been established. Team work can consume substantial usage allowance. The lead normally starts at XHigh and allocates specialist effort to the task within your preferences and available tools. Context management and reasoning settings depend on the host.

0.5.16 completes the six responsibilities when team mode is chosen and authorized, then activates the roles needed. Package integrity, clean-directory extraction and basic skill structure were checked. A complete first run in a new Codex profile, cross-platform behavior, long-term correction and usage savings have not been validated systematically.

## Your experience helps shape the next version.

[Share feedback](https://aidesign996.github.io/ai-practice/team-leader/#comments). Tell me the situation, what happened, and what would work better—all in one comment. English, Traditional Chinese and Simplified Chinese share one public discussion; everyone can read the original comments.

A GitHub sign-in is required to post; reading does not require one. I will use the feedback to improve the skill.

The Team Leader skill is released under the MIT License, Copyright (c) 2026 AI Design 996. Article text and illustrations are separate from the skill package. [MIT](https://github.com/aidesign996/ai-practice/blob/main/skills/team-leader/LICENSE) · [Design references](SOURCES.md)
