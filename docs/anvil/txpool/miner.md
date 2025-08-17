---
id: miner
title: 出块与矿工（miner.rs 概览）
sidebar_label: 矿工/出块
sidebar_position: 55
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/miner.rs
---

概述：本页说明 `src/eth/miner.rs` 的职责、出块节拍（自动/手动）、与交易池/执行器的协作关系。

快速链接：
- 实现：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/miner.rs
- 相关：`src/eth/pool/*`、`src/eth/backend/executor.rs`
- 测试：`crates/anvil/tests/it/{transaction.rs,txpool.rs,logs.rs}`

后续补充：
- 出块流程图（Mermaid）
- 候选选择/打包规则与边界

快速跳转：
- 交易池设计：`/anvil/txpool/design`
- 费用与硬分叉：`/anvil/txpool/fees-hardfork`
- Backend 执行：`/anvil/evm/backend`
- 可观测性：`/anvil/observability/errors-and-logging`
