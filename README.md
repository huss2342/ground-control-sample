# Orbit Notes

A tiny notes API with no dependencies.

> **This is a sample repo for demoing [Ground Control](https://github.com/rcwoshimao/hackwashu-2026).** Its README is deliberately out of date: the code moved on and the docs did not. Scan it with Ground Control to see the drift.

## Requirements

- Node.js 20 or later

## Getting started

Copy `.env.example` to `.env`, then start the dev server:

```sh
npm run dev
```

The server starts from `src/server.js` and listens on http://localhost:3000. <!-- Demo line for a GitHub suggestion screenshot -->

## Configuration

Settings such as the port and the notes title live in `config/default.json`.

## Sample data

Load a few example notes with the seed script:

```sh
npm run seed
```

## Using the API

```sh
curl http://localhost:3000/notes
```

The note store lives in `src/notes.js`.

## Tests

```sh
npm test
```

Tests live in `test/notes.test.js`.
