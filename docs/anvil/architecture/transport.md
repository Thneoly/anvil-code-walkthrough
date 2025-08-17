---
title: 传输层与请求入口（Server/Handler）
sidebar_position: 2
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/server/src/
---

- 独立 crate：`server/src/{lib.rs, handler.rs, config.rs, ws.rs, ipc.rs, pubsub.rs, error.rs}`
- 内部模块：`src/server/{mod.rs, handler.rs, error.rs}`
- 关系：传输适配、路由入口、与 API 层的衔接

快速链接：
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/server/src/handler.rs
- https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/server/handler.rs
