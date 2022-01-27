import { useAuthStore } from '@Lib/context/auth-store.context';
import { UserStorageService } from '@Interfaces/ports/storage-service.interface';

export const useUserStorage = (): UserStorageService => {
  return useAuthStore();
};
