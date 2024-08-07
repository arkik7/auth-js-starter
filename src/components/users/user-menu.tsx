import { auth } from '@/auth';
import SignUpButton from '../authentication/buttons/sign-up-button';
import SignInButton from '../authentication/buttons/sign-in-button';
import SignOutButton from '../authentication/buttons/sign-out-button';
import UserAvatar from './user-avatar';
import SettingsLink from './settings/settings-link';

const UserMenu = async () => {
  const session = await auth();

  if (!session?.user)
    return (
      <div className="flex max-sm:flex-col gap-1">
        <SignUpButton />
        <SignInButton />
      </div>
    );

  return (
    <div className="flex max-sm:flex-col gap-1">
      <UserAvatar user={session.user} />
      <SettingsLink />
      <SignOutButton />
    </div>
  );
};

export default UserMenu;
