---
id: advanced-and-ext
title: 实战与扩展
sidebar_label: 实战与扩展
slug: /anvil/advanced-and-ext
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/
---

本页汇总“新增 RPC / 后端扩展 / 后台任务”的实践路径，并提供小练习与参考链接。

建议结构：
- 扩展一个 RPC（入口/路由/类型/实现/测试）
- 新增一个后台任务（生命周期接入与停止）
- 仅读执行 & Tracer（debug_traceCall）
- 常见问题（并发/背压/缓存/内存）
