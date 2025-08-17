---
title: 分叉与快照
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/backend/fork.rs
---

- 分叉：`src/eth/backend/fork.rs` 的远程状态访问、pre-fork 读取
- 快照/重置：`src/eth/api.rs` 中 `anvil_reset`、`evm_snapshot`、`evm_revert` 路径

示例 permalink：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/backend/fork.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/api.rs
