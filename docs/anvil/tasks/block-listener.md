---
id: block-listener
title: 区块监听（tasks/block_listener.rs）
sidebar_label: 区块监听
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/tasks/block_listener.rs
---

概述：监听新块（本地或上游），触发日志匹配、事件广播与过滤器增量计算等后续流程。

快速链接：
- 源码（block_listener.rs）：ref/foundry-575bf62c/crates/anvil/src/tasks/block_listener.rs
- 源码（tasks/mod.rs）：ref/foundry-575bf62c/crates/anvil/src/tasks/mod.rs
- 源码（pubsub.rs）：ref/foundry-575bf62c/crates/anvil/src/pubsub.rs

时序（简化）：

```mermaid
sequenceDiagram
  participant M as "miner/chain"
  participant L as "block_listener"
  participant F as "filter"
  participant PS as "pubsub"
  M-->>L: 新区块头/体
  L->>F: 匹配日志/地址/主题
  F-->>L: 匹配结果
  L->>PS: 广播 newHeads/logs/pendingTx 等
  PS-->>Subscribers: 推送消息
```

关键点：
- 订阅类型：`newHeads`、`logs`、`newPendingTransactions` 等；与 `eth_newFilter`/`eth_getFilterChanges` 协同。
- 回填与重放：当重组或回滚发生时，需要撤回与重放事件；保持订阅端一致性。
- 背压与限流：高频出块/大量日志时对单链接施加速率限制，避免 WS 堵塞。

测试建议：
- 构造匹配/不匹配的日志，断言 `getFilterChanges` 与 `eth_subscribe logs` 返回一致。
- 模拟短重组（reorg 1-2 个块），验证撤回/重放顺序与去重策略。
