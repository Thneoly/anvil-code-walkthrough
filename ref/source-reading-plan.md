---
id: anvil-source-reading-plan
title: Anvil 源码解读写作计划（Docusaurus）
sidebar_label: 源码解读写作计划
slug: /anvil/source-reading-plan
---

本文档给出以 Docusaurus 搭建的「anvil 源码解读」内容生产方案：写作清单、目录建议（与源码映射）与统一章节模板，确保可持续扩展与 CI 可验证。

## 写作清单（Docusaurus 适配）

- 边界与受众
  - 读者：Rust 工程师 + 以太坊开发者；默认中文，可选中英双语（Docusaurus i18n）。
  - 基线版本：固定到一个 git tag/commit（在每章 Frontmatter 或页首标注），提供“对比 master 的变更”链接。
- 工具链与站点
  - Docusaurus v3：`@docusaurus/preset-classic` + MDX。
  - Mermaid 图表：`@docusaurus/theme-mermaid`，用 ```mermaid 代码块直接渲染。
  - Lint/格式：ESLint/Prettier + Remark lint（可选）。
  - 链接与构建校验：`docusaurus build --no-minify` 开启断链即失败；CI 强制执行。
- 示例与可验证性
  - 大段代码不直接嵌入文档；以最小可运行示例存放在 `docs/examples/` 或 `examples/` 下，由 CI 运行 `cargo build/test` 校验。
  - 文档内引用关键片段，附 GitHub permalink（带 commit hash），防止漂移。
- CI 与发布
  - GitHub Actions：
    - Node + PNPM/NPM 安装 → `docusaurus build`（断链检查）。
    - Rust 工程验证：`cargo build -p anvil`、必要的 `cargo test -p anvil`。
    - 可选脚本：扫描文档中 "Try it" 片段并在 CI 中 smoke test。
  - 部署：`docusaurus deploy` 到 GitHub Pages 或自托管。
- 版本与维护
  - 使用 Docusaurus 文档 versioning 管理大版本；小变更在章节尾部“兼容性与差异”说明。
  - 每季度回顾一次：同步新 EIP/行为变更，维护勘误页（Errata）。

## 目录建议（与源码映射）

下列为建议的站点结构与页面到源码的映射，便于读者从文档跳回实现与测试：

- 0. 预备篇（docs/anvil/intro.md）
  - 前言与阅读指南（基线版本、环境、调试方式）
  - 30 分钟上手：从测试理解 anvil（映射：`crates/anvil/tests/it/*`）

- 1. 架构与生命周期（docs/anvil/architecture.md）
  - 总览与数据流（可复用并改编 `crates/anvil/ARCHITECTURE.md`）
  - 启动与优雅退出：`crates/anvil/bin/main.rs`、`crates/anvil/src/{opts.rs,cmd.rs,service.rs,shutdown.rs}`

- 2. 传输与 RPC（docs/anvil/transport-rpc.md）
  - 传输/会话：`crates/anvil/server/src/{ws.rs,ipc.rs,pubsub.rs,handler.rs,config.rs}`
  - RPC 模型与错误：`crates/anvil/rpc/src/{request.rs,response.rs,error.rs}`、`crates/anvil/core/src/{types.rs,eth/*}`

- 3. 以太坊语义与执行（docs/anvil/evm-backend.md）
  - API 实现：`crates/anvil/src/eth/{api.rs,error.rs,macros.rs}`
  - 执行后端：`crates/anvil/src/eth/backend/{executor.rs,env.rs,db.rs,genesis.rs,time.rs,validate.rs}`
  - 内存实现与回源：`crates/anvil/src/eth/backend/mem/{state.rs,storage.rs,cache.rs,fork_db.rs,inspector.rs}`

- 4. 交易到出块（docs/anvil/tx-to-block.md）
  - 签名/账户：`crates/anvil/src/eth/sign.rs`
  - 交易池：`crates/anvil/src/eth/pool/{mod.rs,transactions.rs}`
  - 矿工/费用/硬分叉：`crates/anvil/src/eth/{miner.rs,fees.rs}`、`crates/anvil/src/hardfork.rs`（含 EIP-1559/4844/7702）

- 5. 事件与工具（docs/anvil/events-and-tools.md）
  - 过滤/日志：`crates/anvil/src/filter.rs`
  - 订阅/广播：`crates/anvil/src/pubsub.rs`
  - 日志初始化与级别：`crates/anvil/src/logging.rs`

- 6. 实战与扩展（docs/anvil/advanced-and-ext.md）
  - 扩展新 RPC/后端/任务（练习：实现一个自定义 RPC）
  - 三条典型时序图深挖：getBalance / sendRawTx / eth_call & trace（`src/eth/api.rs` 及后端路径对照）
  - 常见坑与优化：并发、背压、内存、回源策略

- 附录（docs/anvil/appendix/*.md）
  - CLI/配置参考：`crates/anvil/src/{config.rs,opts.rs,args.rs}`
  - 测试对照表：`crates/anvil/tests/it/*.rs`（行为契约索引）
  - 术语与 EIP 索引：关联到相应实现文件

每页建议在页首提供：
- 基线 commit/tag 与 GitHub permalink 样例
- “跳到实现/测试”的快捷链接清单

## 章节模板（统一格式）

> 推荐每章 10–20 分钟阅读量，配 1–2 个可运行示例。

- 章节目标（读者收获）
  - 3–5 条要点，说明读者读完能做什么
- 源码定位与依赖
  - 相关文件清单与简单依赖图（Mermaid 流程/组件图）
- 一图胜千言
  - 关键数据流/时序图（```mermaid），对照方法名/文件路径标注
- 逐步走读
  - 入口 → 关键函数/类型 → 数据结构 → 边界条件（空值/大输入/权限/超时/并发）
- 可运行示例（Try it）
  - 简短步骤与期望输出；示例代码存于 `docs/examples/`（或仓库现有示例），CI 执行验证
- 常见误区与排错
  - 3–6 条问题清单 + 对应排查路径（文件、日志关键字、测试用例）
- 兼容性与差异
  - 与上一版本/当前 master 的差异点与迁移提醒
- 参考与延伸
  - 相关测试用例、PR、EIP 链接

## 结构与落地建议

- 目录结构建议
  - `docs/anvil/*.md`：章节内容
  - `docs/anvil/appendix/*.md`：附录
  - `docs/examples/*`：最小可运行示例（由 CI 构建/运行）
  - `sidebars.js`/`sidebars.ts`：将 anvil 章节编入侧边栏
- Mermaid 主题
  - 在 Docusaurus config 启用 `@docusaurus/theme-mermaid`，统一图表风格
- 链接策略
  - 引用实现/测试使用 GitHub permalink（带 commit hash），避免随 master 漂移
- CI 要点（示例）
  - `docusaurus build`（断链失败即失败）
  - `cargo build -p anvil && cargo test -p anvil`（可选：仅跑核心用例）
  - 运行 `docs/examples` 下的示例脚本做 smoke test

如需，我可以：
- 初始化 `docs/anvil/` 的上述章节骨架与侧边栏条目
- 提供一个最小可运行示例（含说明）并接入 GitHub Actions 流程
- 将 `crates/anvil/ARCHITECTURE.md` 关键内容迁移/链接为架构章节首页
