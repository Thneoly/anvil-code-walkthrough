---
id: cast-deploy-and-call
title: "Try it: 部署并调用最小合约（forge/cast）"
sidebar_label: "cast: deploy & call"
slug: /anvil/examples/cast-deploy-call
---

前提：已安装 Foundry（forge/cast），本地 Anvil 运行在 8545。

最小合约（存储一个数）：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract Store {
    uint256 public x;
    function set(uint256 v) external { x = v; }
}
```

步骤：
1) 在空目录执行 `forge init --no-commit --simple`，将上面合约保存为 `src/Store.sol`。
2) 编译：`forge build`。
3) 部署：
```bash
forge create src/Store.sol:Store \
  --rpc-url http://127.0.0.1:8545 \
  --private-key $YOUR_PK
```
记录返回的合约地址 `$ADDR`。

4) 调用 set(42)：
```bash
cast send $ADDR "set(uint256)" 42 \
  --rpc-url http://127.0.0.1:8545 \
  --private-key $YOUR_PK
```

5) 读取 x：
```bash
cast call $ADDR "x()(uint256)" --rpc-url http://127.0.0.1:8545
```

提示：
- 在 CI 中可用默认助记词第一把私钥；本地请注意资金安全。
- 也可改为 1559 费用参数（参见：cast-send-1559 示例）。
