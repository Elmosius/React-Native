import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useUser } from '../../hooks/useUser';

export default function UserOnly({ children }) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user]);

  return <>{children}</>;
}
