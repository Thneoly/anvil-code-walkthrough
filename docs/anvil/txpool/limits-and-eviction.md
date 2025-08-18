---
title: 容量限制与逐出策略（limits & eviction）
sidebar_position: 3
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/pool/
---

交易池维护总体与按账户的容量限制，并在资源紧张时执行逐出策略，优先保留“更有价值”的候选交易。

快速链接：
- 源码（pool/mod.rs）：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/pool/mod.rs
- 源码（pool/transactions.rs）：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/pool/transactions.rs
- 相关（miner.rs）：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/miner.rs

## 主要限制维度

- 全局容量：池内总交易数量上限。
- 每账户上限：防止单个账户通过长链路的 queued/pending 占满资源。
- 单笔约束：原始字节大小、访问列表/数据长度上限、blob 相关字段限制（分叉相关）。

## 逐出策略（概念）

```mermaid
flowchart LR
    CAP[容量已满?] -->|是| PICK[挑选低价值候选]
    PICK --> EVICT[逐出]
    EVICT --> OK[释放空间]
    CAP -->|否| OK
```

挑选规则（常见）：
- 优先逐出 effectiveTip 较低的交易；
- 过久未提升/无望执行的 queued 长链；
- 同账户内可替代性高的旧版本（若已被更高出价覆盖）。

注意：逐出必须保证基本不变量，例如不能破坏账户内 pending 的连续性，避免导致矿工无法打包。

## 与出块/重组的相互影响

- 出块后：移除已上链交易，释放空间；触发 queued -> pending 的推进。
- Reorg：将被回滚的交易放回池中并重排；必要时对失效交易进行再验证（余额/费用）。

## 配置项

- 全局/每账户上限：通常由运行参数或默认常量决定（参考 `opts.rs`/`config.rs`）。
- 替换阈值：影响 RBF 的敏感度；阈值过低带来抖动，过高导致用户难以替换。

## 调试建议

- 构造巨大 queued 链并逐步补齐 nonce，观察逐出/推进行为。
- 对同 nonce 连续发送不同 tip 的交易，验证替换阈值触发点与事件通知。
