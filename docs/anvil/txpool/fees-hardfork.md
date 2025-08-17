---
id: fees-hardfork
title: 费用与硬分叉（fees.rs / hardfork.rs）
sidebar_label: 费用/硬分叉
sidebar_position: 56
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/fees.rs
---

概述：本页汇总 `src/eth/fees.rs` 与 `src/hardfork.rs` 在出块与交易校验中的规则，涵盖 EIP-1559/4844/7702 等差异点。

快速链接：
- 源码（fees）：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/fees.rs
- 源码（hardfork）：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/hardfork.rs
- 相关：`src/eth/miner.rs`、`src/eth/backend/validate.rs`
- 测试：`crates/anvil/tests/it/{eip4844.rs,eip7702.rs,gas.rs}`

后续补充：
- 各 EIP 的关键规则与对打包/费用的影响
