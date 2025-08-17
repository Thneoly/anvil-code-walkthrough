---
title: 总览
---

本章给出 Anvil 的功能概览与整体架构图（节点生命周期、传输层、RPC API、EVM/状态、交易池、分叉/快照）。

后续章节将逐一映射到真实源码目录：
- 顶层编排：`src/{lib.rs, args.rs, opts.rs, cmd.rs, config.rs, service.rs, shutdown.rs, logging.rs, tasks/}`
- 传输/请求入口：`server/src/*` 与 `src/server/*`
- RPC 类型：`rpc/src/*`
- EVM/状态：`src/evm.rs` 与 `src/eth/backend/*`
- 交易池：`src/eth/pool/*`
- 分叉/快照：`src/eth/backend/fork.rs` + `src/eth/api.rs`
- 发布-订阅：`src/pubsub.rs` + `src/eth/backend/notifications.rs`
