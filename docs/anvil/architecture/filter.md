---
id: filter
title: 过滤器与查询（filter.rs 概览）
sidebar_label: 过滤器
sidebar_position: 35
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/filter.rs
---

概述：本页梳理 `src/filter.rs` 的过滤器模型、生命周期与与 PubSub/日志的交互关系，并提供测试与实现跳转。

快速链接：
- 实现：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/filter.rs
- 相关：`src/pubsub.rs`、`eth/backend/executor.rs` 日志产生
- 测试：`crates/anvil/tests/it/{logs.rs,pubsub.rs}`

后续补充：
- 生命周期与数据结构图（Mermaid）
- 安装/匹配/查询的边界条件与性能要点
