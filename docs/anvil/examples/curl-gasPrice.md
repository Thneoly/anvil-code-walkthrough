---
id: curl-gasprice
title: "Try it: 获取 gasPrice"
sidebar_label: "curl: eth_gasPrice"
slug: /anvil/examples/curl-gasprice
---

快速验证费用相关接口（传统 gasPrice）。

```bash
curl -s \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":1}' \
  http://127.0.0.1:8545 | jq
```

提示：
- 在 EIP-1559 模式下，请优先使用 maxFeePerGas / maxPriorityFeePerGas 构造交易；该接口仅作兼容。
