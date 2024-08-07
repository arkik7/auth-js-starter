'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { Header } from './header';
import { Social } from './social';
import { BackButton } from './back-button';
import { Separator } from '../ui/separator';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  actionText?: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  actionText,
}: CardWrapperProps) => {
  return (
    <Card className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <Separator asChild className="my-1 bg-background">
        <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:before:border-gray-700 dark:after:border-gray-700">
          Or
        </div>
      </Separator>
      {showSocial && (
        <CardFooter>
          <Social actionText={actionText} />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
