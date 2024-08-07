import { Suspense } from 'react';
import { NewPasswordForm } from '@/components/authentication/forms/new-password-form';

const NewPasswordPage = () => {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
