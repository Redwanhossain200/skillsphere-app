import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import UpdateProfileForm from '@/components/UpdateProfileForm';

export default async function UpdateProfilePage() {
  const headerData = await headers();
  const res = await fetch(
    `${process.env.BETTER_AUTH_URL || 'http://localhost:3000'}/api/auth/get-session`,
    {
      headers: { cookie: headerData.get('cookie') || '' },
    },
  );

  const session = await res.json();

  if (!session) {
    redirect('/login');
  }

  const { user } = session;

  return <UpdateProfileForm user={user} />;
}
