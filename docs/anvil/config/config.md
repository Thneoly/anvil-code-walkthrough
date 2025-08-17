---
id: config
title: 配置系统（config.rs）
sidebar_label: 配置系统
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/config.rs
---

概述：`src/config.rs` 定义运行期配置与默认策略，并在 `service.rs` 中被消费以装配服务。

快速链接：
- 源码：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/config.rs
- 装配：`src/service.rs`
- CLI：`src/opts.rs`, `src/args.rs`, `src/cmd.rs`

后续补充：
- 配置结构图（Mermaid）与关键字段说明
- CLI 参数到配置对象的映射表

快速跳转：
- CLI 参数：`/anvil/config/cli`
- 服务装配：`/anvil/architecture/lifecycle`
- FAQ：`/anvil/troubleshooting/faq`
