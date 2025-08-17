---
title: EVM 适配与封装
sidebar_position: 2
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/evm.rs
---

概述：`src/evm.rs` 承上启下，桥接 API 与 Backend，负责交易执行、状态访问与硬分叉条件的衔接（`src/hardfork.rs`）。

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/evm.rs
