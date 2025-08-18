---
id: fees-hardfork
title: 费用与硬分叉（fees.rs / hardfork.rs）
sidebar_label: 费用/硬分叉
sidebar_position: 56
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/fees.rs
---

概述：本页汇总 `src/eth/fees.rs` 与 `src/hardfork.rs` 在出块与交易校验中的规则，涵盖 EIP-1559/4844/7702 等差异点。

快速链接：
- 源码（fees）：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/eth/fees.rs
- 源码（hardfork）：https://github.com/foundry-rs/foundry/blob/575bf62c/crates/anvil/src/hardfork.rs
- 相关：`src/eth/miner.rs`、`src/eth/backend/validate.rs`
- 测试：`crates/anvil/tests/it/eip4844.rs`、`crates/anvil/tests/it/eip7702.rs`、`crates/anvil/tests/it/gas.rs`

## 关键规则速览

### EIP-1559（London）

- baseFee 按区块内 gas 使用比例动态调整；tip = min(maxFee-baseFee, maxPriorityFee)。
- 校验：maxFee >= baseFee 且 tip >= 最小阈值；否则拒绝入池/打包。
- 矿工选择：按 tip 排序，同时受 block gas limit 影响；baseFee 销毁不计入矿工奖励。

### EIP-4844（Cancun）

- 引入 blob gas 与数据载荷，存在单独的价格与上限；与执行 gas 分离。
- 校验：blob 相关字段必须成对出现且大小/数量受限；需独立估算与费用检查。
- 打包：矿工需要在 block 模板中考虑 blob 限额，避免超过 target。

### EIP-7702 等其他

- 账户抽象相关提案会影响签名/nonce/费用校验路径；实现需在 validate.rs 处扩展。

## baseFee 计算

- 依据父区块 baseFee、目标 gas、实际 gas 使用量计算；需注意整数除法与上下限夹持。
- 在定时出块与自动出块模式下，区块内交易数量不同会导致 baseFee 波动差异。

## 注意事项

- 估算路径需按目标分叉的规则执行，避免 “估算通过、实际入池失败”。
- 误差与边界：tip 计算中的 min/max 组合、下溢/上溢、blob 与执行 gas 双约束。
- 兼容性：当链配置切换分叉时，确保 env 与 fees 同步更新。
