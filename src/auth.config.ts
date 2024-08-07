/*
With Next.js and next-auth in mind, let’s think about what we need to do to make Auth.js be able to both run some of its 
code in an edge runtime, but also use a database to store its sessions. We would need a separate “version” of next-auth without 
the database settings for the edge environment and another one with the database for everywhere else. To achieve this, we can use 
the “lazy initialization” features of Auth.js to instantiate a standalone client without the adapter for middleware and another one 
to be used everywhere else.

docs: https://authjs.dev/guides/edge-compatibility#middleware
*/
import bcrypt from 'bcryptjs';

import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';

import { LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/data/users/user';

// Only an object, not a full Auth.js instance
export default {
  providers: [
    Google, // in env file create AUTH_GOOGLE_ID="your key here" and AUTH_GOOGLE_SECRET="your secret here" if formatted like this Auth.js will automatically pick up these
    // Add any other supported providers here docs: https://authjs.dev/getting-started/authentication/oauth
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
