---
id: how-to-add-rpc
title: 如何新增一个 RPC 方法
sidebar_label: 新增 RPC 方法
sidebar_position: 1
base_commit: 575bf62c
upstream_repo: foundry-rs/foundry
upstream_path: crates/anvil/src/eth/api.rs
---

步骤：
1) 在 `src/eth/api.rs` 增加方法实现（必要时更新宏/导出）。
2) 需要新类型时在 `rpc/` 或 `core/` 子 crate 定义/序列化（`serde`）。
3) 确认路由映射（`src/server/handler.rs`），匹配 JSON-RPC `method` 名。
4) 添加集成测试（`crates/anvil/tests/it`），最小化网络依赖。

快速链接：
- 源码（api.rs）：ref/foundry-575bf62c/crates/anvil/src/eth/api.rs
- 源码（handler.rs）：ref/foundry-575bf62c/crates/anvil/src/server/handler.rs
- 源码（rpc models）：ref/foundry-575bf62c/crates/anvil/rpc/src/

请求流转：

```mermaid
flowchart LR
  A["Transport(HTTP/WS/IPC)"] --> B["server::handler 路由"]
  B --> C["eth::api::<method>"]
  C --> D["后端/池/EVM 调用"]
  D --> E["结果/错误映射 rpc::error"]
```

建议：
- 输入校验尽量在 API 层完成，错误用可读 message + data 附上下文（如 tx hash）。
- 长耗时方法添加超时与可取消上下文；必要时分页/流式返回。
- 保持幂等（如重复 nonce 或重复查询）与线程安全。
