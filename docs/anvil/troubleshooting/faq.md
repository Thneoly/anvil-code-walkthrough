---
id: faq
title: 常见问题与边界
sidebar_label: FAQ
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/
---

Q: 为何我的测试偶发失败（时间相关）？
- 多数由系统时钟与自动挖矿导致；使用 `--block-time` 固定节奏，或禁用自动挖矿并显式 `evm_mine`/`anvil_setNextBlockTimestamp`。

Q: Fork 模式下数据为何“变化”了？
- 若未固定 `--fork-block-number`，上游会推进；固定高度或启用 cache-only 读取。参见：ref/foundry-575bf62c/crates/anvil/src/eth/backend/fork.rs。

Q: 交易入池被拒绝的常见原因？
- nonce 过旧/过大、费用不足（baseFee/priorityFee）、签名或链 ID 不匹配、触发规则限制（如 7702 授权）。参见：ref/foundry-575bf62c/crates/anvil/src/eth/{fees.rs,miner.rs,sign.rs}。

Q: 如何定位 JSON-RPC 错误？
- 查看错误 code 与 data，上下文中含 method/hash/高度等；必要时开启 debug 日志。参见：ref/foundry-575bf62c/crates/anvil/rpc/src/error.rs。

Q: 出块顺序是否稳定？
- `instant` 模式在高并发下可能非决定性；建议固定出块间隔，并确保 TxPool 排序稳定（price/time/nonce）。

Q: 如何快速确认链路是否通？
- 使用示例中的 curl `eth_chainId`；或订阅 `newHeads` 验证推送。参见：docs/anvil/examples/curl-chainid。

涵盖主题：
- 时间与出块
- 费用市场
- Fork 容错
- 内存状态管理
- 并发与背压

快速链接：
- `src/eth/miner.rs`, `src/eth/fees.rs`
- `src/eth/backend/mem/fork_db.rs`
- `src/eth/pool/*`
- `server/src/*`
