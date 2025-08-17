---
title: 交易池设计
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/pool/
---

`src/eth/pool/{mod.rs, transactions.rs}`：交易生命周期、优先级与队列、pending/queued 管理；`src/eth/{miner.rs, fees.rs}` 对交易池的影响。

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/pool/mod.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/miner.rs

快速跳转：
- 池实现：`src/eth/pool/{mod.rs, transactions.rs}`
- 打包：`src/eth/miner.rs`
- 费用：`src/eth/fees.rs`
- 测试示例：`crates/anvil/tests/it/txpool.rs`
