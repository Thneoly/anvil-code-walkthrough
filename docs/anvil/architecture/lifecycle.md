---
title: 节点生命周期与顶层编排
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/
---

聚焦 anvil 顶层（permalink 示例：
https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/service.rs ，
https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/shutdown.rs）：

快速跳转：
- 实现：`src/service.rs`、`src/logging.rs`、`src/shutdown.rs`
- 服务器整合：`src/server/{mod.rs, handler.rs, error.rs}`
- 测试示例：`crates/anvil/tests/it/api.rs`
- 入口与配置：`src/{lib.rs, args.rs, opts.rs, cmd.rs, config.rs}`
- 服务/任务：`src/{service.rs, shutdown.rs, logging.rs, tasks/}`
- 服务器模块：`src/server/{mod.rs, handler.rs, error.rs}` 与独立 crate `server/src/*` 的职责对比
