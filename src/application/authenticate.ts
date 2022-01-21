import { supabase } from '@Services/api';

export function useAuthenticate() {
  const signOut = () => supabase.auth.signOut();

  return { signOut };
}
