---
id: rpc-hardening
title: RPC 方法加固（分页/超时/取消）
sidebar_label: RPC 加固
sidebar_position: 3
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/
---

目标：在不改变方法语义的前提下，提高 API 的稳定性与可控性。

建议：
- 分页：对潜在大结果集提供分页/limit 参数，避免超大响应。
- 超时：为外部依赖（如 Fork 回源）设定超时与重试策略。
- 取消：对长耗时操作支持取消（如 WS 取消订阅/HTTP 客户端断开）。
- 背压：限制并发与队列长度，避免热点方法拖垮节点。

快速链接（源码）：
- 路由：ref/foundry-575bf62c/crates/anvil/src/server/handler.rs
- API：ref/foundry-575bf62c/crates/anvil/src/eth/api.rs
- 回源：ref/foundry-575bf62c/crates/anvil/src/eth/backend/fork.rs
