'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SignUpButton = () => {
  const router = useRouter();

  return (
    <Button variant={'action'} onClick={() => router.push('/auth/register')}>
      Sign Up
    </Button>
  );
};

export default SignUpButton;
