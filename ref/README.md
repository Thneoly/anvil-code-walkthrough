# ref 目录说明

本目录用于存放上游 Foundry 仓库的源码供文档讲解使用。

- 上游仓库：https://github.com/foundry-rs/foundry
- 当前固定版本：子模块 `ref/foundry-575bf62c`，Pinned 到 commit `575bf62c`
- 主要关注范围：`crates/anvil`（其余文件仅为上下文与许可证）

许可证说明：

- 上游采用双许可证（MIT/Apache-2.0）。本仓库通过 Git Submodule 引用，遵循其原许可证，仅用于学习与文档引用。

子模块使用指南（推荐）：

1) 获取/初始化子模块

- 首次克隆后执行：
	- git submodule update --init --recursive

2) 固定到指定提交（当前为 575bf62c）

- 子模块目录：`ref/foundry-575bf62c`
- 切换提交：
	- cd ref/foundry-575bf62c
	- git checkout 575bf62c
	- cd ../..
- 提交子模块引用变化：
	- git add ref/foundry-575bf62c
	- git commit -m "chore(ref): pin foundry submodule to 575bf62c"

3) 升级到新的上游提交（按需）

- 在子模块目录内 checkout 目标提交，然后在主仓库提交子模块指针更新。
- 可选更新方式：
	- cd ref/foundry-575bf62c && git fetch --all && git checkout <new_commit>
	- cd ../.. && git add ref/foundry-575bf62c && git commit -m "chore(ref): bump foundry submodule to <new_commit>"

可选：脚本复制（不再默认）

- 如需以“快照”形式复制而非子模块，参见 `scripts/update-ref.sh` 脚本，从本地或远端复制 `crates/anvil` 到 `ref/` 下新目录。

文档引用约定：

- 在文档中引用源码路径时，以 `ref/foundry-575bf62c/crates/anvil/...` 为根，方便校验脚本 `npm run links:check` 进行检查。
