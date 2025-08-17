---
title: Node lifecycle & orchestration
sidebar_position: 1
---

Focus on top-level code:
- Entrypoints & config: `src/{lib.rs, args.rs, opts.rs, cmd.rs, config.rs}`
- Services/tasks: `src/{service.rs, shutdown.rs, logging.rs, tasks/}`
- Server modules vs server crate: `src/server/{mod.rs, handler.rs, error.rs}` vs `server/src/*`
