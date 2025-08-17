---
title: 传输层与请求入口（Server/Handler）
sidebar_position: 2
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/server/src/
---

概述：对比独立 `server/` 子 crate 与 `src/server/` 内部模块，说明连接/会话、编解码与方法路由的衔接方式。

- 独立 crate：`server/src/{lib.rs, handler.rs, config.rs, ws.rs, ipc.rs, pubsub.rs, error.rs}`
- 内部模块：`src/server/{mod.rs, handler.rs, error.rs}`
- 关系：传输适配、路由入口、与 API 层的衔接

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/server/src/handler.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/server/handler.rs

快速跳转：
- RPC 类型：`/anvil/architecture/rpc-types`
- 以太坊 API：`/anvil/overview` → `src/eth/api.rs`
- 事件流：`/anvil/pubsub/events`
- 测试示例：`crates/anvil/tests/it/{wsapi.rs,api.rs}`
