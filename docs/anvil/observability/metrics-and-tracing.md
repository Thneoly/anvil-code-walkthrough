---
id: metrics-and-tracing
title: 指标与追踪（实践建议）
sidebar_label: 指标与追踪
sidebar_position: 2
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/
---

目标：在不侵入核心逻辑的前提下，获得可定位/可量化的运行特性。

结构化日志：
- 字段建议：`ts, level, method, path, req_id, peer, latency_ms, status, error_code`。
- 关键点打印：请求入口/出口（一次），cache miss、重试、超时、重组等转折点。

指标建议（示例维度）：
- 请求：QPS、P95/P99 延迟、错误比率（按 method 分类）。
- Fork 回源：请求数、成功率、平均时延、缓存命中率。
- 订阅：连接数、消息速率、丢弃/背压次数。
- 池/出块：pending 大小、入池失败原因分布、每块包含数。

追踪（可选）：
- 为长链路方法（如回源读取/执行）加 span，串起子步骤（入队、回源、执行、持久化）。
- 慢调用阈值告警（如 > P99 或固定 ms）。

快速链接（源码）：
- 日志初始化：ref/foundry-575bf62c/crates/anvil/src/logging.rs
- 错误映射：ref/foundry-575bf62c/crates/anvil/rpc/src/error.rs
