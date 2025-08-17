---
title: Backend / Executor / DB 概览
---

`src/eth/backend/{fork.rs, executor.rs, db.rs, env.rs, validate.rs, genesis.rs, time.rs, notifications.rs, cheats.rs}`
- 执行：`executor.rs`
- 状态：`db.rs` + `env.rs`
- 校验：`validate.rs`
- 初始化：`genesis.rs`
- 时间/通知：`time.rs`、`notifications.rs`
- 分叉：`fork.rs`（与 fork 章节联动）
