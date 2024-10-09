'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/lib/useTranslations';
import { User } from '@supabase/supabase-js';

export default function DashboardContent() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const t = useTranslations('Dashboard');

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (!user) {
        router.push('/');
      }
    };
    getUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!user) {
    return <div>{t('loading')}</div>;
  }

  return (
    <>
      <h1 className="text-6xl font-bold mb-8">{t('welcome', { email: user.email || '' })}</h1>
      <Button onClick={handleSignOut}>{t('signOut')}</Button>
    </>
  );
}