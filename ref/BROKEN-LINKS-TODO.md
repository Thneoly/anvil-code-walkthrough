# 断链修复计划（跟踪）

目标：在不影响 CI 的前提下，逐步修复所有指向 `ref/foundry-575bf62c/crates/anvil/...` 的断链，最终恢复严格检查（STRICT_LINKS=1）。

## 阶段 1：收敛与分类
- 收集当前 `npm run -s links:check` 的输出（本地已可运行），导出列表。
- 分类：
  - A. 文件确实不存在（Foundry 版本变动/路径迁移）
  - B. 路径拼写或目录层级错误
  - C. 指向 `tests/it/*` 等已存在但被忽略的子路径（确认实际存在）

## 阶段 2：逐类修复
- A 类：
  - 调整文档中的路径到新位置；若需保留旧版本，请在 `ref/` 下同步对应版本（使用 `npm run ref:update` 脚本或手动同步）。
- B 类：
  - 更正文档拼写/层级，确保与 `ref` 目录一致。
- C 类：
  - 如存在则无需改动；如不存在但需要引用，考虑切换到 GitHub permalink（非相对路径）或同步缺失文件。

## 阶段 3：验证与收尾
- 本地跑：`npm run -s links:check`，直至 All source refs OK。
- CI：临时将 `STRICT_LINKS=1` 手动触发一次构建验证；若通过，再把 CI/Deploy 的 STRICT_LINKS 还原为严格模式。

## 附：排查技巧
- 快速查找所有引用：
  - VS Code 全局搜索：`ref/foundry-575bf62c/crates/anvil/`
  - 或 `grep -R "ref/foundry-575bf62c/crates/anvil/" docs/anvil`
- 映射真实路径：参见 `ref/foundry-575bf62c/crates/anvil/src/**`、`rpc/src/**`、`server/src/**`、`tests/it/**`。
