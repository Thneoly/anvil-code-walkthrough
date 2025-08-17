---
id: block-listener
title: 区块监听（tasks/block_listener.rs）
sidebar_label: 区块监听
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/tasks/block_listener.rs
---

概述：监听新区块并触发日志匹配、事件广播与相关后续流程。

快速链接：
- 源码：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/tasks/block_listener.rs
- 整体任务：`src/tasks/mod.rs`
- 事件：`src/pubsub.rs`

快速跳转：
- 事件与订阅：`/anvil/pubsub/events`
- 过滤器：`/anvil/architecture/filter`
- 后台任务索引：`/anvil/tasks`
