import { Suspense } from 'react';
import { LoginForm } from '@/components/authentication/forms/login-form';

const Login = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default Login;
