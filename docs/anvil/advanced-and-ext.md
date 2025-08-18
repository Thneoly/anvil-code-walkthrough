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
- 新增一个 RPC（入口/路由/类型/实现/测试）→ 见《开发指北/新增 RPC》。
- 新增一个后台任务（启动/停止/通道/广播）→ 参考 `tasks/*` 与 `pubsub.rs`。
- 仅读执行 & Tracer（`debug_traceCall`）→ 参考 `backend/executor.rs` 与 tracer 入口。
- 性能与扩展：并发/背压/缓存命中率观测与调优。

小练习：
1) 添加 `anvil_echo` 方法：回显输入并记录调用耗时（debug 日志）。
2) 新增一个每 N 秒统计池大小的任务：通过 pubsub 向客户端广播指标。
3) 在 fork 模式下实现“cache-only”开关，Miss 时直接报错并计数。

提示：
- 统一错误映射与结构化日志，便于定位。
- 注意可取消与超时，避免阻塞核心线程。
