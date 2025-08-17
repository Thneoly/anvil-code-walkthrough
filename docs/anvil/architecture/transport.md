---
title: 传输层与请求入口（Server/Handler）
---

- 独立 crate：`server/src/{lib.rs, handler.rs, config.rs, ws.rs, ipc.rs, pubsub.rs, error.rs}`
- 内部模块：`src/server/{mod.rs, handler.rs, error.rs}`
- 关系：传输适配、路由入口、与 API 层的衔接
