import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ExtendedUser } from '@/next-auth';

interface Props {
  user: ExtendedUser;
}

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      <AvatarImage src={user.image ?? ''} alt="User Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
