---
id: tests-map
title: 测试对照表
sidebar_label: 测试对照表
slug: /anvil/appendix/tests-map
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/tests/it/
---

汇总 `crates/anvil/tests/it/*.rs` 的主题与对应章节，便于“从文档跳测试”。

- RPC 行为：`api.rs`、`anvil_api.rs`、`wsapi.rs`
- 交易/池：`transaction.rs`、`txpool.rs`
- 执行踪迹：`traces.rs`
- 日志与订阅：`logs.rs`、`pubsub.rs`
- 分叉/二层：`fork.rs`、`optimism.rs`
- 规则/EIP：`eip4844.rs`、`eip7702.rs`
- 状态/创世/费用：`state.rs`、`genesis.rs`、`gas.rs`
