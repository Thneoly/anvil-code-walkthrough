---
title: Overview
sidebar_position: 2
sidebar_label: Overview
---

High-level Anvil functionality and architecture (lifecycle, transport, RPC API, EVM/state, txpool, fork/snapshot).

Mapping to real code paths:
- Top-level: `src/{lib.rs, args.rs, opts.rs, cmd.rs, config.rs, service.rs, shutdown.rs, logging.rs, tasks/}`
- Transport/entry: `server/src/*` and `src/server/*`
- RPC types: `rpc/src/*`
- EVM/state: `src/evm.rs` and `src/eth/backend/*`
- Tx pool: `src/eth/pool/*`
- Fork/snapshot: `src/eth/backend/fork.rs` + `src/eth/api.rs`
- PubSub: `src/pubsub.rs` + `src/eth/backend/notifications.rs`
