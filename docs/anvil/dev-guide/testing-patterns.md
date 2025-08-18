---
id: testing-patterns
title: 测试编写模式（snapshot/revert/定序）
sidebar_label: 测试编写模式
sidebar_position: 4
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/tests/it/
---

建议模式：
- 固定分叉高度：`--fork-block-number`，稳定外部依赖。
- 显式时间与出块：禁用自动挖矿，使用 `evm_mine` 与 `anvil_setNextBlockTimestamp`。
- 快照与回滚：`evm_snapshot` / `evm_revert` 快速复原状态。
- 稳定定序：同价交易用延迟/nonce 控制顺序，减少并发随机性。

参考测试：
- 分叉：ref/foundry-575bf62c/crates/anvil/tests/it/fork.rs
- 交易/池：ref/foundry-575bf62c/crates/anvil/tests/it/transaction.rs、ref/foundry-575bf62c/crates/anvil/tests/it/txpool.rs
- 出块/费用：ref/foundry-575bf62c/crates/anvil/src/eth/miner.rs、ref/foundry-575bf62c/crates/anvil/tests/it/gas.rs
- 日志/订阅：ref/foundry-575bf62c/crates/anvil/tests/it/logs.rs、ref/foundry-575bf62c/crates/anvil/tests/it/pubsub.rs
