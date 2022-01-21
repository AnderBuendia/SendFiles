import { useAuthStore } from '@Lib/context/auth-store.context';
import { UserStorageService } from '@Interfaces/ports/storage.interface';

export const useUserStorage = (): UserStorageService => {
  return useAuthStore();
};
