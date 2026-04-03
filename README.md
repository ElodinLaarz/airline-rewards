# airline-rewards
simple site to display best rewards costs across airlines

## Current Status & Capabilities

The project has achieved its initial prototype goals. The following features are fully implemented:

### Core Foundation
- **Framework:** Next.js 16 (App Router) with React 19.
- **Language:** TypeScript with strict type definitions for flights, airlines, award charts, and credit card programs.
- **Styling:** Tailwind CSS v4.
- **CI/CD:** GitHub Actions workflow enforcing formatting (Prettier), linting (ESLint + Security plugin), and production builds.

### Key Features
- **Flight Search Form:** A comprehensive search interface with:
    - Autocomplete airport search (Origin & Destination).
    - Date selection and passenger count.
    - Support for One-way and Round-trip (mocked).
- **Rewards Analysis Engine:**
    - Real-time calculation of credit card point requirements (Amex MR, Capital One).
    - Comparison between direct Cash Price (Travel Eraser) and Point Transfers to airline partners.
    - "High Value Transfer" recommendations (based on >2.0 cents per point valuation).
- **Mock Search API:** An endpoint that simulates flight results with realistic pricing and point conversions.
- **Results Page:** A responsive interface displaying flight cards with detailed reward options.
- **Data Layer:** Pre-populated datasets for:
    - 20+ major global airlines and their alliances.
    - 30+ major international airports.
    - Regional award charts for business class travel.
    - Major credit card transfer partner ratios.

## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
