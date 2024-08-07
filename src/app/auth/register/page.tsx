import { Suspense } from 'react';
import { RegisterForm } from '@/components/authentication/forms/register-form';

const Register = () => {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
};

export default Register;
