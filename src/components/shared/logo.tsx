import Link from 'next/link';

interface Props {
  isLink?: boolean;
}

const Logo = ({ isLink }: Props) => {
  return (
    <>
      {isLink ? (
        <Link rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
          R
        </Link>
      ) : (
        <div className="ml-2 font-bold text-xl flex">R</div>
      )}
    </>
  );
};

export default Logo;
