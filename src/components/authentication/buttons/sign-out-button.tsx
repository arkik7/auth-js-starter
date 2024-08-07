'use client';

import { logout } from '@/actions/auth/logout';
import { Button } from '@/components/ui/button';

const SignOutButton = () => {
  return (
    <Button
      variant={'action'}
      onClick={() => {
        logout();
      }}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
