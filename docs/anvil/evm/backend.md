---
title: Backend / Executor / DB 概览
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/backend/
---

`src/eth/backend/{fork.rs, executor.rs, db.rs, env.rs, validate.rs, genesis.rs, time.rs, notifications.rs, cheats.rs}`

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/backend/executor.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/backend/db.rs
- 执行：`executor.rs`
- 状态：`db.rs` + `env.rs`
- 校验：`validate.rs`
- 初始化：`genesis.rs`
- 时间/通知：`time.rs`、`notifications.rs`
- 分叉：`fork.rs`（与 fork 章节联动）
