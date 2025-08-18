---
id: cast-send-1559
title: "Try it: 发送一笔 EIP-1559 交易（cast）"
sidebar_label: "cast: send 1559"
slug: /anvil/examples/cast-send-1559
---

前提：已安装 Foundry（cast），本地 Anvil 运行在 8545。

发送 0 ETH 转账（仅示例）：

```bash
cast send 0x0000000000000000000000000000000000000001 \
  --value 0 \
  --rpc-url http://127.0.0.1:8545 \
  --private-key $YOUR_PK \
  --legacy=false \
  --priority-fee 1gwei \
  --gas-price 0 \
  --max-fee-per-gas 2gwei
```

提示：
- 1559 交易请设置 `--priority-fee` 与 `--max-fee-per-gas`；`--gas-price` 将被忽略。
- 使用 Anvil 默认助记词派生的私钥或自备私钥；注意资金安全。
