---
id: cli
title: CLI 参数与子命令（opts/args/cmd）
sidebar_label: CLI 与子命令
sidebar_position: 2
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/
---

概述：命令行参数解析生成运行配置，控制出块、时间、EIP/硬分叉、fork 源等行为。
快速链接：
- `src/opts.rs`, `src/args.rs`, `src/cmd.rs`
- 入口：`crates/anvil/bin/main.rs`

后续补充：
- 常用参数与默认值清单
- 子命令（如 `anvil` 与可能的工具子命令）

快速跳转：
- 配置系统：`/anvil/config/config`
- 生命周期：`/anvil/architecture/lifecycle`
- FAQ：`/anvil/troubleshooting/faq`
