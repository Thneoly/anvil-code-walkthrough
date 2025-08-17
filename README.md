# Anvil Code Walkthrough

[![Deploy Docusaurus to GitHub Pages](https://github.com/Thneoly/anvil-code-walkthrough/actions/workflows/deploy.yml/badge.svg)](https://github.com/Thneoly/anvil-code-walkthrough/actions/workflows/deploy.yml)

在线访问：https://thneoly.github.io/anvil-code-walkthrough/

English README: [README.en.md](./README.en.md)

基于 Docusaurus 的在线文档项目，聚焦对 foundry-rs/foundry 仓库中 `crates/anvil` 的核心源码进行结构化解析与讲解，帮助读者从源码层面深入理解 Anvil 的设计与实现。

## ✅ 确认原则

- 以源码为准：严格参照 `ref/foundry-575bf62c/crates/anvil` 中的实际目录与文件。
- 逐文件分析：先画结构图，再讲实现与调用关系。
- 文档框架：使用 Docusaurus（v3），在本仓库中组织发布。

## 🧭 阅读计划（按模块与真实路径）

> 说明：以下所有路径均以 `ref/foundry-575bf62c/crates/anvil` 为根，章节将精确映射到真实源码文件/目录，避免抽象命名。

1. 导论与总览

- docs/introduction：项目目标、读者对象、阅读方式
- docs/overview：Anvil 功能概览与“整体架构图”（节点生命周期、传输层、RPC API、EVM/状态、交易池、分叉与快照）

2. 顶层编排与节点生命周期（anvil crate 根 src）

- `src/lib.rs`：对外导出与模块结构
- `src/args.rs`、`src/opts.rs`、`src/cmd.rs`：启动参数与 CLI 入口
- `src/config.rs`：节点配置结构
- `src/service.rs`：服务启动、任务编排、挖矿/定时任务等
- `src/shutdown.rs`：关闭信号
- `src/logging.rs`：日志管理
- `src/tasks/`：后台任务

3. 传输层与请求入口（Server/Handler）

- 传输实现（独立 crate）：`server/src/{lib.rs, handler.rs, config.rs, ws.rs, ipc.rs, pubsub.rs, error.rs}`
- 顶层路由（模块版）：`src/server/{mod.rs, handler.rs, error.rs}`
- 对比说明：为何既有独立 `server` crate，又在 anvil 内部提供 `src/server/` 模块（职责划分与依赖边界）

4. RPC 类型与编解码（RPC crate）

- `rpc/src/{lib.rs, request.rs, response.rs, error.rs}`：RPC 请求/响应类型与错误模型
- 与传输层、API 层的衔接关系

5. Ethereum API 层（方法分发与业务编排）

- `src/eth/api.rs`：JSON-RPC 方法的实现入口与分发流程
- `src/filter.rs`、`src/pubsub.rs`：日志过滤、订阅推送（含 `filter_logs`）
- `src/hardfork.rs`：硬分叉参数与行为切换

6. EVM 执行与状态（Backend/Executor/DB）

- `src/evm.rs`：EVM 适配与封装（与 Backend/Executor 的关系）
- `src/eth/backend/{fork.rs, executor.rs, db.rs, env.rs, validate.rs, genesis.rs, time.rs, notifications.rs, cheats.rs}`：
  - fork.rs：远程网络分叉与历史状态访问
  - executor.rs：交易执行/状态变更
  - db.rs/env.rs：状态存储与环境
  - validate.rs：交易校验
  - genesis.rs：创世初始化
  - notifications.rs：区块/事件通知

7. 交易池（TxPool）

- `src/eth/pool/{mod.rs, transactions.rs}`：交易池结构、优先级/队列管理、pending/queued 状态
- `src/eth/miner.rs`、`src/eth/fees.rs`：打包与费用规则对交易池的影响

8. 分叉与快照能力（Fork/Snapshot）

- `src/eth/backend/fork.rs`：ForkedNetwork、远程数据源访问、pre-fork 读取逻辑
- `src/eth/api.rs`：`anvil_reset`、`evm_snapshot`、`evm_revert` 相关方法的调用路径

9. 发布-订阅（PubSub）与事件流

- 传输层：`server/src/pubsub.rs`（WS/IPCs 支持）
- 业务层：`src/pubsub.rs`（新块、日志筛选与推送）
- 与 `src/eth/backend/notifications.rs` 的联动

10. 测试与示例

- `tests/` 与 `test-data/`：集成测试、fixtures、端到端用例

以上结构建议将原“core-code/\*”细分为更贴近源码边界的章节：

- architecture → 覆盖 顶层编排 + 传输层/请求入口 + RPC 类型
- evm → 覆盖 EVM/Backend/Executor/DB
- txpool → 独立
- fork → 独立
- rpc → 衔接 server 与 api.rs 的方法分发与返回

## 🗺️ 文档交付大纲

- docs/
  - introduction.md（导论）
  - overview.md（全局概览与架构图）
  - architecture/
    - lifecycle.md（lib.rs/args/opts/cmd/config/service/shutdown/tasks）
    - transport.md（server crate 与 src/server 模块对比）
    - rpc-types.md（rpc crate 的 request/response/error）
  - evm/
    - backend.md（executor/db/env/validate/genesis/time/notifications/cheats）
    - evm-adapter.md（src/evm.rs 与 backend 的关系）
  - txpool/
    - design.md（pool 模块与交易生命周期）
  - fork/
    - fork-and-snapshot.md（fork.rs 与 api 中的 reset/snapshot/revert）
  - pubsub/
    - events.md（filter/pubsub + notifications）

## 🛠 运行与开发

本项目使用 Docusaurus 3。建议使用 npm（也可使用 pnpm/yarn）。

安装依赖：

```bash
npm install
```

本地启动：

```bash
npm run start
```

若本地看到图标等静态资源 404（因为 GitHub Pages 的 baseUrl），可在本地将基础路径设为根：

```bash
# 方式一：使用脚本
npm run start:local

# 方式二：临时环境变量（macOS/zsh）
BASE_URL=/ npm run start

# 方式三：使用 .env（复制 .env.example 为 .env）
cp .env.example .env
npm run start
```

构建静态站点：

```bash
npm run build
## 若希望以根路径构建（本地预览更接近 /），可用：
npm run build:local
```

本地预览已构建站点：

```bash
npm run serve
## 直接预览最新构建产物（如刚执行了 build:local）：
npm run serve:local
```

部署（GitHub Pages 示例，可选）：

```bash
# 使用 SSH
USE_SSH=true npm run deploy

# 或使用用户名
GIT_USER=<your-github-username> npm run deploy
```

### 可选：开启搜索（Algolia DocSearch）

开源项目可免费申请 DocSearch 索引（https://docsearch.algolia.com/）。拿到以下配置后，写入 `.env` 即可自动启用：

- DOCSEARCH_APP_ID
- DOCSEARCH_API_KEY
- DOCSEARCH_INDEX_NAME

未配置则搜索不启用。

## 🤝 贡献

- 新增章节时请在 README 的“阅读计划”中补充对应真实文件路径。
- 引用源码时务必使用准确文件/符号名，避免抽象命名。
- 章节结构：先结构图（目录/依赖/调用流）→ 再实现细节与关键代码段。

## 参考

- Docusaurus 文档：https://docusaurus.io/docs
- 源码参考根：`ref/foundry-575bf62c/crates/anvil`
