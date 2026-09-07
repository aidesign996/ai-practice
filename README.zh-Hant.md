# AI Design 996 — AI practice

[English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-CN.md)

這裡分享我做的 AI 技能，以及工作中的思考與實踐。你可以直接使用技能，也可以閱讀背後的設計與過程。

[分享首頁](https://aidesign996.github.io/ai-practice/index.zh-hant.html)

## Skills · 可用技能

可以下載安裝，在自己的項目中直接調用。

### Team Leader · 0.5.16

給 AI 項目配一位負責人，協調專業崗位，持續對照用戶目標檢查實際成果，並組織必要修正。

[下載 Skill](https://github.com/aidesign996/ai-practice/releases/download/team-leader-v0.5.16/team-leader-0.5.16.zip) · [安裝與版本說明](https://github.com/aidesign996/ai-practice/releases/tag/team-leader-v0.5.16) · [查看源碼](https://github.com/aidesign996/ai-practice/tree/main/skills/team-leader)

## 實踐記錄

分享設計思路、工作過程和項目成果。

**2026-09-07 · 設計手記**

[為什麼我給 AI 項目配了一位負責人](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh-hant.html) — Team Leader 的設計思路：目標與反饋、專業分工、項目知識，以及這套方法目前的適用範圍和侷限。

## 裝好以後，一句話開始

打開項目，選中 Team Leader，或先點名 `$team-leader`。然後說：

> 接下來這個項目由你負責，你跟進一下。

負責人應先了解現有資料、已確認的目標和未完成工作，再繼續推進；缺少關鍵需求時主動問你。你只需要隨著溝通，補充自己的想法。

希望採用團隊模式時，可以再讓負責人建立完整團隊並負責協調。實際創建取決於工具支持與用戶授權；已有團隊會複用原崗位，簡單的一次性任務可以保持單人。

### 安裝和開始使用

1. 下載 ZIP 並解壓，保留完整 team-leader 文件夾，包括方法參考和模板。
2. 個人使用放到 `~/.agents/skills/`；只供某個項目使用則放到該項目的 `.agents/skills/`。Windows 個人安裝後應能找到 `%USERPROFILE%\.agents\skills\team-leader\SKILL.md`。完整包共 22 個文件，含 MIT 許可證，不要只複製 SKILL.md。
3. 在 Codex 項目新對話中選擇或點名 `$team-leader`，確認能夠讀取，然後說上面的接手語句。未發現技能時重啟 Codex。升級前將舊安裝及自定義修改備份到技能目錄之外，再替換完整文件夾；保留現有項目資料和目標。

### 適用範圍與當前邊界

主要面向 Codex 中的 Astra。Sol 已有部分專業崗位實踐，但尚未證實全 Sol 團隊具有同等效果。團隊工作可能消耗較多額度；負責人通常以 XHigh 為起點，尊重用戶設置，在工具支持時按任務分配專業崗位投入並管理上下文。

0.5.16 在決定採用團隊模式且有授權後一次補齊六類職責，工作時按需調動。已檢查包內文件完整性、乾淨目錄解壓和基礎技能結構；新 Codex 配置中的完整首次運行、跨平臺、長期糾偏與額度節省尚未系統驗證。

## 你的使用反饋，會幫助我改進下一版。

[分享使用反饋](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh-hant.html#comments). 一個留言框裡說清場景、遇到的問題，以及你希望怎樣處理會更好。英文、繁體和簡體頁面共用同一個公開討論區，所有人都能看到原文留言。

留言需要 GitHub 登錄，閱讀無需登錄。我會根據反饋繼續優化。

Team Leader 技能採用 MIT 許可證，Copyright (c) 2026 AI Design 996。文章和配圖與技能包分別提供。 [MIT](https://github.com/aidesign996/ai-practice/blob/main/skills/team-leader/LICENSE) · [設計參考](SOURCES.md)
