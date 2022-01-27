import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@Services/api';

export type AuthStoreContextType = {
  user: User | null;
};

export type AuthStoreProviderProps = {
  children: ReactNode;
};

const AuthStoreContext = createContext<AuthStoreContextType>({
  user: null,
});

export const useAuthStore = () => useContext(AuthStoreContext);

export const AuthStoreProvider: FC<AuthStoreProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () => {
      checkUser();
    });

    checkUser();

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
  }

  const value = {
    user,
  };

  return (
    <AuthStoreContext.Provider value={value}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export default AuthStoreContext;
