# Playwright QA Automation

A simple React + TypeScript app with Playwright end-to-end tests. Built for learning QA automation.

## App Features
- **Counter** — Increase, Decrease, Reset buttons
- **Todo List** — Add and Delete todos

## Tech Stack
- React + TypeScript (Vite)
- Playwright for end-to-end testing

## How to run

```bash
# Install dependencies
npm install

# Start the app
npm run dev

# Run all tests
npx playwright test

# Run tests with browser visible
npx playwright test --headed

# Open the visual test UI
npx playwright test --ui
```

## Test files
| File | What it tests |
|------|--------------|
| `tests/counter.spec.ts` | Counter: Increase, Decrease, Reset |
| `tests/todo.spec.ts` | Todo: Add, Delete, count |
