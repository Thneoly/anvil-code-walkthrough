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
	- If local static assets 404 due to GitHub Pages baseUrl, use:
		- `npm run start:local` (uses BASE_URL=/)
		- or `BASE_URL=/ npm run start`
		- or copy `.env.example` to `.env` and run `npm run start`
- Build: `npm run build`
	- To build with root baseUrl for local preview: `npm run build:local`

## Deploy (CI)
- GitHub Actions auto-builds and publishes to `gh-pages` on push to `main`.

### Optional: Search (Algolia DocSearch)

For open-source, you can apply for DocSearch: https://docsearch.algolia.com/
Once you receive credentials, set these in `.env` to enable search automatically:

- DOCSEARCH_APP_ID
- DOCSEARCH_API_KEY
- DOCSEARCH_INDEX_NAME

If unset, search remains disabled.
