---
title: 发布-订阅与事件流
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/
---

- 概述：解释发布-订阅主题、日志过滤与事件广播的协作关系。
- 传输：`server/src/pubsub.rs`
- 业务：`src/pubsub.rs`（含日志 `filter_logs`）
- 通知源：`src/eth/backend/notifications.rs`

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/pubsub.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/server/src/pubsub.rs

快速跳转：
- 过滤器：`/anvil/architecture/filter`
- Backend 日志：`/anvil/evm/backend`
- 传输入口：`/anvil/architecture/transport`
