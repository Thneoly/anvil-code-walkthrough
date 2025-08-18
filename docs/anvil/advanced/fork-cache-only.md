---
title: 专题三：Fork 扩展（cache-only 与 Miss 处理）
sidebar_position: 3
---

目标：在 fork 模式下增加 `cache-only` 开关，本地 DB 未命中时直接报错并计数；关闭时允许回源并可缓存。

实施：
- 配置：在 `config`/`env` 中新增布尔开关，可运行期读取；
- 读路径：`backend/db.rs` 或相邻层在 miss 分支依据开关决定行为；
- 观测：统计 Miss 次数与命中率，记录关键日志。

Mermaid（决策）：
```mermaid
flowchart TD
  R["读取状态/历史"] --> L{"本地 DB 是否命中"}
  L -->|是| OK["返回结果"]
  L -->|否| CF{"cache-only?"}
  CF -->|是| ERR["返回 Miss 错误 + 计数"]
  CF -->|否| RS["fork 回源并可缓存"]
  RS --> OK
```

延伸阅读：

- [分叉与快照](../fork/fork-and-snapshot)
- [EVM Backend / Executor / DB 概览](../evm/backend)
