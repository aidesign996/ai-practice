# AI Design 996 — AI practice

[English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-CN.md)

Skills and working methods developed through practical projects. Try them, share a real situation, and help improve the next version.

## Team Leader

**Give your AI project a team lead to guide the team toward its goal.**

Team Leader coordinates product design, technical design, development and independent AI review. The leader compares results with the user's goal, feeds back the gap, and coordinates corrections. Project documents preserve decisions and continuation points.

[Read the illustrated introduction](https://aidesign996.github.io/ai-practice/team-leader/) · [Download 0.5.16](https://github.com/aidesign996/ai-practice/releases/download/team-leader-v0.5.16/team-leader-0.5.16.zip) · [Release notes and checksums](https://github.com/aidesign996/ai-practice/releases/tag/team-leader-v0.5.16) · [Skill source](skills/team-leader)

### Install and start

1. Download the ZIP and extract it.
2. Put the **complete `team-leader` folder** in `~/.agents/skills/`. On Windows the entry file should be `%USERPROFILE%\.agents\skills\team-leader\SKILL.md`. The folder contains 22 files, including the MIT license. Do not copy only `SKILL.md`.
3. Select or name `$team-leader` in a new Codex project conversation and describe your goal:

> You are responsible for this project from now on. I want to build [your idea]. Please review the current state, clarify the goal, and take it forward. Please establish the complete team for this project and coordinate its work.

Team creation depends on the host's available tools and your authorization. Existing teams are reused; small one-off tasks can remain solo. If the skill is not discovered, restart Codex. Back up an existing installation and any local changes outside the skills directory before replacing the complete folder; keep existing project documents and goals.

### Fit and current limits

The primary design target is Astra in Codex. Some specialist work has used Sol, but equivalent results for an all-Sol team have not been established. Team work can consume substantial usage allowance. The leader normally uses XHigh, allocates specialist reasoning levels to the task, and manages context when supported by the host. These are workflow policies, not guarantees that the skill can change every runtime setting.

0.5.16 establishes all six responsibilities when team mode is selected and authorized, then activates only the roles needed. Package integrity, clean-directory extraction and basic skill structure were checked. A complete first run in a new Codex profile, cross-platform behavior, long-term correction and usage savings have not been validated systematically.

### Feedback

[Leave a comment under the article](https://aidesign996.github.io/ai-practice/team-leader/#comments). Describe your situation, what happened, and what would have worked better—in one message. **English, Traditional Chinese and Simplified Chinese pages share the same public discussion.** Comments remain in their original language and are visible to everyone. A GitHub sign-in is required to post; reading does not require one. Feedback will inform future improvements.

The Team Leader skill is distributed under the [MIT License](skills/team-leader/LICENSE), Copyright (c) 2026 AI Design 996. See [design references](SOURCES.md). Article text and illustrations are separate from the skill package.
