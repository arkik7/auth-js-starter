[Next.js](https://nextjs.org/) / [Auth.js](https://authjs.dev/getting-started) with [Prisma](https://www.prisma.io/) starter template.

## Features

- Pre-configured semi-advanced auth.js setup, with google and credentials provider.
- Prisma starter schema prepared for storing your users in your own database.
- Sendgrid integration for sending emails.
- Insert couple of environment variables and your user authentication basic setup is ready.
- Not happy with schema? you can easily customize the pre-defined models in user.prisma file. Yeap, the project is fully compatible with Prisma's new "Split your schema" feature. Read more here [Organize Your Prisma Schema into Multiple Files in v5.15](https://www.prisma.io/blog/organize-your-prisma-schema-with-multi-file-support)

**DISCLAIMER:** This is only a starter template, you are encouraged to review the authentication setup before launching the app to production.

## Getting Started

```bash
gh repo clone arkik7/auth-js-starter
npm install
```

- create .env file in the same level as this Readme file
- see AUTH_SECRET related [docs](https://authjs.dev/getting-started/installation)
- OAuth google provider [docs](https://authjs.dev/getting-started/authentication/oauth)

_env example_

```bash
NEXT_PUBLIC_APP_URL="http://localhost:3000"
AUTH_SECRET="your auth secret"

AUTH_GOOGLE_ID="your CLIENT_ID from google"
AUTH_GOOGLE_SECRET="your CLIENT_SECRET from google"


# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="your database url, e.g. supabase"

# Sendgrid
WEBSITE_EMAIL_ADDRESS='the email you verified with SendGrid.'
SENDGRID_API_KEY='your SendGrid API key (create an account here - https://sendgrid.com)'
```

- After setting up the environment variables

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Helpful resources

- [Prisma | Works With Supabase](https://supabase.com/partners/integrations/prisma)
- [Supabase | Prisma Documentation](https://www.prisma.io/docs/orm/overview/databases/supabase)
- [Auth.js](https://authjs.dev/)
