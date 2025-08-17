---
title: Fork 与 Snapshot
---

- 分叉：`src/eth/backend/fork.rs` 的远程状态访问、pre-fork 读取
- 快照/重置：`src/eth/api.rs` 中 `anvil_reset`、`evm_snapshot`、`evm_revert` 路径
