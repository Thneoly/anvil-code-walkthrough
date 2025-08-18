---
id: curl-blocknumber
title: "Try it: 获取最新区块号"
sidebar_label: "curl: eth_blockNumber"
slug: /anvil/examples/curl-blocknumber
---

快速验证节点出块是否正常（读取最新区块号）。

前提：本地 Anvil 正在运行，默认 RPC 端口 8545。

请求：

```bash
curl -s \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://127.0.0.1:8545 | jq
```

期望输出：

```json
{"jsonrpc":"2.0","id":1,"result":"0x0"}
```

说明：
- 初始为创世高度 0；若启用了自动挖矿或手动 `evm_mine`，该值会递增。
