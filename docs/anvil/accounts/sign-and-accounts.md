---
id: sign-and-accounts
title: 账户与签名（sign.rs）
sidebar_label: 账户与签名
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/sign.rs
---

概述：管理本地账户、生成与校验签名、恢复 signer，服务交易提交与 API 调用。

快速链接：
- 源码：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/sign.rs
- 相关：`src/eth/api.rs`, `src/eth/pool/*`
- 测试：`crates/anvil/tests/it/{transaction.rs,api.rs}`

快速跳转：
- 交易池：`/anvil/txpool/design`
- 出块：`/anvil/txpool/miner`
- API：`/anvil/overview` → `src/eth/api.rs`
