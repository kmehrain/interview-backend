# Interview Backend

A professional starter full-stack project built with **Next.js**, **TypeScript**, **App Router**, **Tailwind CSS**, **Zod**, **Jest**, and **Playwright**.

## Framework and Tech Stack

This project uses:

- **Next.js 16** for the full-stack React framework
- **React 19** for UI
- **TypeScript** for type safety
- **App Router** for routing and API route handlers
- **Tailwind CSS** for styling
- **Zod** for request validation
- **Jest** for unit testing
- **Playwright** for end-to-end testing
- **Winston** for structured logging

## Project Structure

```text
src/
  app/
    api/
      health/
        route.ts
  lib/
    logger.ts
    services/
      healthService.ts
    validation/
      healthSchema.ts

tests/
  unit/
  e2e/