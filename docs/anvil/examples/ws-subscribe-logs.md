---
id: ws-subscribe-logs
title: "Try it: 订阅 newHeads/logs（WebSocket）"
sidebar_label: "WS: subscribe newHeads/logs"
slug: /anvil/examples/ws-subscribe
---

使用任意 WebSocket 客户端（如 wscat/websocat/浏览器）连接本地 Anvil：

- URL：`ws://127.0.0.1:8545`
- 协议：JSON-RPC over WS

订阅新区块：

```json
{"id": 1, "jsonrpc": "2.0", "method": "eth_subscribe", "params": ["newHeads"]}
```

订阅日志（按地址+主题过滤）示例：

```json
{
  "id": 2,
  "jsonrpc": "2.0",
  "method": "eth_subscribe",
  "params": [
    "logs",
    {
      "address": "0x0000000000000000000000000000000000000000",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
      ]
    }
  ]
}
```

取消订阅：

```json
{"id": 3, "jsonrpc": "2.0", "method": "eth_unsubscribe", "params": ["<subscription-id>"]}
```

提示：
- 订阅 ID 由服务端返回，后续通知消息会包含该 ID。
- 结合 `eth_newFilter`/`eth_getFilterChanges` 可做轮询式获取。

快速链接（源码）：
- ref/foundry-575bf62c/crates/anvil/src/pubsub.rs
- ref/foundry-575bf62c/crates/anvil/src/server/handler.rs
