'use client';

import Link from 'next/link';

const SettingsLink = () => {
  return (
    <Link href={'/settings'} className="text-accent bg-primary rounded-xl px-2 text-center pt-2">
      Settings
    </Link>
  );
};

export default SettingsLink;
