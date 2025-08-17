---
title: RPC 类型与编解码
sidebar_position: 3
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/rpc/src/
---

概述：`rpc/src/{lib.rs, request.rs, response.rs, error.rs}` 描述 JSON-RPC 的请求/响应模型与错误语义，并被传输层与以太坊 API 消费。

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/rpc/src/request.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/rpc/src/response.rs

快速跳转：
- 传输入口：`/anvil/architecture/transport`
- API 实现：`/anvil/overview` → `src/eth/api.rs`
- 错误与日志：`/anvil/observability/errors-and-logging`
