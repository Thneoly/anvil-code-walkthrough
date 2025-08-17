---
id: how-to-add-rpc
title: 如何新增一个 RPC 方法
sidebar_label: 新增 RPC 方法
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/api.rs
---

步骤：
1. 在 `src/eth/api.rs` 添加方法实现（必要时更新宏/导出）。
2. 需要新类型时在 `core`/`rpc` 子 crate 更新模型。
3. 确认 `src/server/handler.rs` 路由映射。
4. 添加测试（`crates/anvil/tests/it`）。

快速链接：
- API：`src/eth/api.rs`
- 路由：`src/server/handler.rs`
- 模型：`crates/anvil/rpc/src/*`
