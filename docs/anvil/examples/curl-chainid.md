---
id: curl-chainid
title: "Try it: 获取链 ID"
sidebar_label: "curl: eth_chainId"
slug: /anvil/examples/curl-chainid
---

快速验证 JSON-RPC 通路（以链 ID 为例）。

前提：本地 Anvil 正在运行（或任意兼容的以太坊节点），默认 RPC 端口 8545。

请求：

```bash
curl -s \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' \
  http://127.0.0.1:8545 | jq
```

期望输出：

```json
{"jsonrpc":"2.0","id":1,"result":"0x7a69"}
```

说明：
- 0x7a69 == 31337（Anvil 默认 chainId）。
- 可替换为任意兼容节点（如 Hardhat、Geth 等），返回值依链配置而异。
