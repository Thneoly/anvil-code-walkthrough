# Anvil Code Walkthrough

[![Deploy Docusaurus to GitHub Pages](https://github.com/Thneoly/anvil-code-walkthrough/actions/workflows/deploy.yml/badge.svg)](https://github.com/Thneoly/anvil-code-walkthrough/actions/workflows/deploy.yml)

Live site: https://thneoly.github.io/anvil-code-walkthrough/

This project documents the core source code of `crates/anvil` (from foundry-rs/foundry) using Docusaurus, providing a structured deep dive into Anvil’s design and implementation.

## Principles
- Source of truth: `ref/foundry-575bf62c/crates/anvil` actual code and file layout
- File-by-file analysis: first structure diagrams, then implementation details
- No imaginary modules or filenames

## Content Map (based on real paths)
- Top-level lifecycle and orchestration: `src/{lib.rs, args.rs, opts.rs, cmd.rs, config.rs, service.rs, shutdown.rs, logging.rs, tasks/}`
- Transport and request entry: `server/src/*` and `src/server/*`
- RPC types: `rpc/src/{lib.rs, request.rs, response.rs, error.rs}`
- EVM/state: `src/evm.rs` and `src/eth/backend/*`
- Tx pool: `src/eth/pool/*`
- Fork & snapshot: `src/eth/backend/fork.rs` + `src/eth/api.rs`
- PubSub: `src/pubsub.rs` + `src/eth/backend/notifications.rs`

## Develop
- Install: `npm install`
- Start: `npm run start`
- Build: `npm run build`

## Deploy (CI)
- GitHub Actions auto-builds and publishes to `gh-pages` on push to `main`.
