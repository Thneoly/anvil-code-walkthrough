---
title: 专题二：后台任务（txpool 指标广播）
sidebar_position: 2
---

目标：启动一个后台任务，每 N 秒统计 txpool pending/queued 等指标，通过 pubsub 广播 `anvil_metrics`。

实施：
- 启停：在 `service` 装配时创建任务 handle，shutdown 路径优雅退出；
- 通道：使用 `broadcast` 向订阅者推送 JSON 指标；
- 指标：pending/queued 数量、替换次数、驱逐计数、平均等待时长等。

Mermaid（流程）：
```mermaid
flowchart LR
  T["任务: metrics_tick"] --> P["读取 txpool 尺寸"]
  P --> PUB["pubsub 推送 anvil_metrics"]
  PUB --> WS["WS 客户端"]
```

延伸阅读：

- [开发指北 · 后台任务](../dev-guide/add-background-task)
- [任务 · 区块监听](../tasks/block-listener)
- [可观测性 · 指标与追踪](../observability/metrics-and-tracing)
