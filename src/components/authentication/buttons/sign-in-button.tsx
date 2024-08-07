'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { LoginButtonModeSelect } from './login-button-mode';

const SignInButton = () => {
  const router = useRouter();

  return (
    <>
      <LoginButtonModeSelect asChild>
        <Button>Sign In</Button>
      </LoginButtonModeSelect>
      <LoginButtonModeSelect asChild mode="modal">
        <Button variant={'destructive'}>Sign In from Modal</Button>
      </LoginButtonModeSelect>
    </>
  );
};

export default SignInButton;
