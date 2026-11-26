# Sinemic demo checkout

A small TypeScript checkout used to demonstrate Sinemic, a tool that keeps project memory, verifies changes with checks, and exports the result.

## Files

- src/checkout.ts: checkout logic with subtotal, discount, and total.
- test/checkout.test.ts: tests for the checkout module.

## Requirements

- REQ-001 "Discount above 1000" (status: met)
- REQ-002 "Total includes tax" (status: not met yet)

## Known gap

The total does not include tax yet. The fix is planned as a demo task.

## Run it

npm install
npm test
npm run typecheck
