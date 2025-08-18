---
id: ws-subscribe-pending
title: "Try it: 订阅待打包交易（pendingTransactions）"
sidebar_label: "WS: pendingTransactions"
slug: /anvil/examples/ws-pending
---

连接本地 WS：`ws://127.0.0.1:8545`

订阅 pending 交易：

```json
{"id": 1, "jsonrpc": "2.0", "method": "eth_subscribe", "params": ["newPendingTransactions"]}
```

将收到交易哈希流。若需要获取详细交易，可对哈希调用 `eth_getTransactionByHash`。

快速链接（源码）：
- ref/foundry-575bf62c/crates/anvil/src/pubsub.rs
