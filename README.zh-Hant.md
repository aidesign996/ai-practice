# AI Design 996 — AI 實踐分享

[English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-CN.md)

分享在實際項目中形成的技能和工作方法。歡迎試用，說說真實場景，一起改進下一版。

## Team Leader

**給 AI 項目配一位負責人，帶領團隊朝正確的方向前進。**

負責人協調產品設計、技術設計、開發與獨立 AI 驗收，持續比較目標與實際成果，反饋差距並組織修正；項目文檔保留有效決定與繼續點。

[閱讀完整圖文介紹](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh-hant.html) · [下載 0.5.16](https://github.com/aidesign996/ai-practice/releases/download/team-leader-v0.5.16/team-leader-0.5.16.zip) · [版本說明與校驗文件](https://github.com/aidesign996/ai-practice/releases/tag/team-leader-v0.5.16) · [技能源碼](skills/team-leader)

### 安裝和開始使用

1. 下載 ZIP 並解壓。
2. 將**完整的 `team-leader` 文件夾**放到 `~/.agents/skills/`。Windows 下應能找到 `%USERPROFILE%\.agents\skills\team-leader\SKILL.md`。完整目錄共 22 個文件，包含 MIT 許可證；不要只複製 `SKILL.md`。
3. 在 Codex 項目新對話中選擇或點名 `$team-leader`，像向團隊負責人交代工作一樣說明目標：

> 接下來這個項目由你負責。我想做[你的想法]，請先了解現狀，明確目標，再帶著項目往前推進。請為這個項目建立完整團隊，由你負責協調。

實際建隊取決於工具支持與用戶授權；已有團隊會複用原崗位，簡單任務可以保持單人。未發現技能時重啟 Codex。升級前將舊安裝及自定義修改備份到技能目錄之外，再替換完整文件夾；保留現有項目文檔和目標。

### 適用範圍與當前邊界

主要面向 Codex 中的 Astra。Sol 已有部分專業崗位實踐，但尚未證實全 Sol 團隊具有同等效果。團隊工作可能消耗較多額度；負責人通常默認 XHigh，按任務安排專業崗位推理級別，並在工具支持時管理上下文。這是工作方法，不能保證技能可以更改每一項運行設置。

0.5.16 在決定採用團隊模式且有授權後一次補齊六類職責，工作時按需調動。已檢查包內文件完整性、乾淨目錄解壓和基礎技能結構；新 Codex 配置中的完整首次運行、跨平臺、長期糾偏與額度節省尚未系統驗證。

### 歡迎反饋

[在文章下方直接留言](https://aidesign996.github.io/ai-practice/team-leader/article-preview.zh-hant.html#comments)，一個框裡說明場景、遇到的問題，以及你希望怎樣處理會更好。**英文、繁體中文和簡體中文頁面共用同一個公開討論區**；留言保留原文，所有人都能看到。留言需要 GitHub 登錄，閱讀無需登錄。我會根據反饋繼續優化。

Team Leader 技能採用 [MIT 許可證](skills/team-leader/LICENSE)，Copyright (c) 2026 AI Design 996。[設計參考](SOURCES.md)。文章和配圖與技能包分別提供。
