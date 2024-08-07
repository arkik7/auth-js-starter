'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
// import { FaGithub } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

interface SocialProps {
  actionText: string | undefined;
}

export const Social = ({ actionText }: SocialProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  // configure github provider and uncomment the github button

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full flex gap-1" variant="outline" onClick={() => onClick('google')}>
        <FcGoogle className="h-5 w-5" /> {actionText && <span>{actionText} with Google</span>}
      </Button>
      {/*
      <Button size="lg" className="w-full" variant="outline" onClick={() => onClick('github')}>
        <FaGithub className="h-5 w-5" /> {actionText && <span>{actionText} with Github</span>}
      </Button>
       */}
    </div>
  );
};
