This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## How to connect with backend

You need to set NODE_TLS_REJECT_UNAUTHORIZED to false so the application can do client side api calls to non https route
```bash
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

After setting that command you should be able to run the backend and automatically connect. It should all be pre-configured.
