import { supabase } from '@Services/api';
import { AuthenticationService } from '@Interfaces/ports/auth-service.interface';

export function useAuthentication(): AuthenticationService {
  const logoutRequest = () => supabase.auth.signOut();

  return { logoutRequest };
}
