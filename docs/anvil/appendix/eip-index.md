---
id: eip-index
title: 术语与 EIP 索引
sidebar_label: EIP 索引
slug: /anvil/appendix/eip-index
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/
---

文档中涉及的常见术语与 EIP（摘要）：

- EIP-155：链 ID 保护（交易签名）。
- EIP-2718：Typed Transaction Envelope（交易类型总则）。
- EIP-2930：访问列表交易（access list）。
- EIP-1559：费用市场（maxFeePerGas/baseFee/priorityFee）。
- EIP-4844：Blob 交易（data gas / blob gas）。
- EIP-7702：权限委托账户模型（授权/撤销）。

在源码中的落点：
- 费用/出块：
  - ref/foundry-575bf62c/crates/anvil/src/eth/fees.rs
  - ref/foundry-575bf62c/crates/anvil/src/eth/miner.rs
- 硬分叉开关：ref/foundry-575bf62c/crates/anvil/src/hardfork.rs
- 交易解析/验签：ref/foundry-575bf62c/crates/anvil/src/eth/sign.rs
- 执行环境：
  - ref/foundry-575bf62c/crates/anvil/src/eth/backend/env.rs
  - ref/foundry-575bf62c/crates/anvil/src/eth/backend/executor.rs

注：完整规范请以 eips.ethereum.org 为准，这里仅作术语定位与代码落点索引。
