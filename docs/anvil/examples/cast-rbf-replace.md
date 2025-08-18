---
id: cast-rbf-replace
title: "Try it: 同 nonce 提价替换（RBF）"
sidebar_label: "cast: RBF 替换"
slug: /anvil/examples/cast-rbf-replace
---

目标：演示在同一账户、同一 nonce 下，以更高报价替换旧交易（Replace-by-fee）。

前提：已安装 Foundry（cast），本地 Anvil 运行在 8545，账户 A 有余额且解锁或有私钥。

## 第一步：发送一笔较低报价的交易

```bash
# 记录当前 nonce（以账户 A 为例）
cast nonce $ACCOUNT_A --rpc-url http://127.0.0.1:8545

# 发送第一笔 1559 交易（报价较低）
cast send 0x0000000000000000000000000000000000000001 \
  --value 0 \
  --rpc-url http://127.0.0.1:8545 \
  --private-key $PK_A \
  --legacy=false \
  --priority-fee 1gwei \
  --max-fee-per-gas 2gwei \
  --nonce $NONCE
```

## 第二步：用更高有效出价替换

```bash
# 更高的 priority fee 或更高的 max-fee-per-gas（注意有效出价定义）
cast send 0x0000000000000000000000000000000000000001 \
  --value 0 \
  --rpc-url http://127.0.0.1:8545 \
  --private-key $PK_A \
  --legacy=false \
  --priority-fee 2gwei \
  --max-fee-per-gas 4gwei \
  --nonce $NONCE
```

阈值说明：
- 若实现设定了相对提升阈值（如 ≥10%），请确保第二笔的有效出价超过阈值，否则会被拒绝替换。

## 观察结果

- 订阅 pending 或检查交易池，旧交易应被替换；
- 出块后，新交易应优先被打包；
- 可对比两次交易哈希，确保第二笔生效。

## 相关文档

- 规则速查：/anvil/txpool/rules-cheatsheet
- 入池管线：/anvil/txpool/pipeline
- Pending/Queued 提升：/anvil/txpool/pending-and-promotion
