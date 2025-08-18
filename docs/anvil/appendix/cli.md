---
id: cli
title: CLI / 配置参考
sidebar_label: CLI / 配置
slug: /anvil/appendix/cli
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/
---

按模块汇总 CLI 选项与对应配置，细节以源码为准（保持最小索引，避免表格漂移）。

快速链接（源码）：
- ref/foundry-575bf62c/crates/anvil/src/opts.rs
- ref/foundry-575bf62c/crates/anvil/src/args.rs
- ref/foundry-575bf62c/crates/anvil/src/cmd.rs
- ref/foundry-575bf62c/crates/anvil/src/config.rs

链与分叉：
- `--chain-id` → Config.chain_id
- `--hardfork` → Config.hardfork
- `--fork-url`、`--fork-block-number`、`--fork-headers`

出块与时间：
- `--block-time`、`--no-mining`、`--steps-tracing`
- `--timestamp`（下一块）/ `anvil_setNextBlockTimestamp`

费用：
- `--base-fee`、`--gas-price`、`--priority-fee`

账户：
- `--accounts`、`--mnemonic`、`--seed`、`--balance`、`--unlocked`、`--impersonate`

网络/安全：
- `--host`、`--port`（HTTP）
- `--ws`、`--ws-port`
- `--ipc`
- `--allow-origin`、`--max-request-body-size`、`--no-cors`

日志与可观测性：
- 日志级别/格式参见：ref/foundry-575bf62c/crates/anvil/src/logging.rs

说明：
- 建议固定 `--fork-block-number`；在 CI 中优先使用显式出块与时间推进，提升稳定性。
