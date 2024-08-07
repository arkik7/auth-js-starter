import { auth } from '@/auth';
import { ExtendedUser } from '@/next-auth';

export const currentUser = async (): Promise<ExtendedUser | undefined> => {
  const session = await auth();
  const user = session?.user;

  return user;
};

export const currentRole = async (): Promise<'ADMIN' | 'USER' | undefined> => {
  const session = await auth();
  const role = session?.user?.role;

  return role;
};
