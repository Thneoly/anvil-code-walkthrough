#!/usr/bin/env bash
set -euo pipefail

# 简易同步脚本：将 foundry 仓库中 crates/anvil 的指定版本复制到 ref/ 目录下
# 用法示例：
#   ./scripts/update-ref.sh /path/to/foundry <commit-ish> foundry-<short>
# 或：
#   ./scripts/update-ref.sh https://github.com/foundry-rs/foundry.git <commit-ish> foundry-<short>

SRC_REPO=${1:-}
COMMIT=${2:-}
TARGET_DIR=${3:-}

if [[ -z "${SRC_REPO}" || -z "${COMMIT}" || -z "${TARGET_DIR}" ]]; then
  echo "用法: $0 <本地路径或git地址> <commit-ish> <目标目录名>"
  exit 1
fi

WORKDIR=$(mktemp -d)
trap 'rm -rf "$WORKDIR"' EXIT

if [[ -d "$SRC_REPO/.git" ]]; then
  # 本地仓库
  git -C "$SRC_REPO" fetch --all --tags || true
  git -C "$SRC_REPO" archive --format=tar "$COMMIT" crates/anvil | tar -x -C "$WORKDIR"
else
  # 远端仓库
  git clone --no-checkout --depth=1 "$SRC_REPO" "$WORKDIR/repo"
  git -C "$WORKDIR/repo" fetch --depth=1 origin "$COMMIT"
  git -C "$WORKDIR/repo" checkout FETCH_HEAD -- crates/anvil
fi

DEST="ref/${TARGET_DIR}"
mkdir -p "$DEST"
rsync -a --delete "$WORKDIR"/crates/anvil "$DEST/crates/"

# 可选：复制许可证与根文档
for f in LICENSE-APACHE LICENSE-MIT README.md; do
  if [[ -f "$WORKDIR/repo/$f" ]]; then
    cp -f "$WORKDIR/repo/$f" "$DEST/" || true
  elif [[ -f "$SRC_REPO/$f" ]]; then
    cp -f "$SRC_REPO/$f" "$DEST/" || true
  fi
done

echo "已更新: $DEST/crates/anvil"
