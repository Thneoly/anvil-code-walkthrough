---
title: 节点生命周期与顶层编排
---

聚焦 anvil 顶层：
- 入口与配置：`src/{lib.rs, args.rs, opts.rs, cmd.rs, config.rs}`
- 服务/任务：`src/{service.rs, shutdown.rs, logging.rs, tasks/}`
- 服务器模块：`src/server/{mod.rs, handler.rs, error.rs}` 与独立 crate `server/src/*` 的职责对比
