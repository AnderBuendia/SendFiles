import { useAuthentication } from '@Services/authAdapter';
import { useUserStorage } from '@Services/storageAdapter';

export function useAuthenticate() {
  const { logoutRequest } = useAuthentication();
  const { user } = useUserStorage();

  const isLogged = Boolean(user);

  const signOut = () => logoutRequest();

  return { user, isLogged, signOut };
}
