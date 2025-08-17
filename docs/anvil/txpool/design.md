---
title: 交易池设计
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/pool/
---

概述：`src/eth/pool/{mod.rs, transactions.rs}` 管理交易生命周期、优先级与队列（pending/queued），并受 `src/eth/{miner.rs, fees.rs}` 影响。

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/pool/mod.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/miner.rs
