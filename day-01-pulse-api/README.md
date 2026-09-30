# Day 01 — pulse-api

**Concept:** A production-style Express 5 skeleton. It shows the middleware chain,
request logging, a JSON 404, a centralized error handler with one consistent
error shape, automatic async error handling in Express 5, and graceful shutdown.

## Run

```bash
cp .env.example .env      # Windows cmd: copy .env.example .env
npm install
npm run dev               # http://localhost:4000/api/health
```

## Endpoints

| Method | Path        | Description                  |
| ------ | ----------- | ---------------------------- |
| GET    | /api/health | Status, uptime, timestamp    |
| GET    | /api/boom   | Demo: async error → JSON 500 |
| \*     | (anything)  | JSON 404                     |

## Error format

```json
{
  "success": false,
  "error": { "message": "Route not found: GET /nope", "code": "NOT_FOUND" }
}
```

## Screenshot

![health check](./screenshots/health.png)

## What I learned

- (fill in after the study session)
