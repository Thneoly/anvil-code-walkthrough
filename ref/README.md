# ref 目录说明

本目录存放用于文档讲解的上游源码快照，当前来源：

- 仓库：https://github.com/foundry-rs/foundry
- 版本：固定于 `foundry-575bf62c` 目录（可视为某一 commit 的快照）
- 关注范围：`crates/anvil`（其余文件仅为上下文与许可证）

许可证说明：

- 原仓库采用双许可证（MIT/Apache-2.0），本目录已保留 `LICENSE-MIT` 与 `LICENSE-APACHE`，并仅用于学习与文档引用。

更新建议（二选一）：

1) 使用子模块（推荐长期维护）

- 将 `ref/foundry-575bf62c` 切换为 Git Submodule，固定到需要的 commit。

2) 使用脚本复制（轻量）

- 参见 `scripts/update-ref.sh`，可从本地或远端仓库复制 `crates/anvil` 到 `ref/` 下的新版本目录。

使用约定：

- 文档中引用源码路径时，请以 `ref/foundry-575bf62c/crates/anvil/...` 为根，确保可被检查脚本校验。
