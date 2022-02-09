import { useAuthStore } from '@Lib/context/auth-store.context';
import { useAppStore } from '@Lib/context/app-store.context';
import {
  FileStorageService,
  LinkStorageService,
  UserStorageService,
} from '@Interfaces/ports/storage-service.interface';

export const useUserStorage = (): UserStorageService => {
  return useAuthStore();
};

export const useLinkStorage = (): LinkStorageService => {
  return useAppStore();
};

export const useFileStorage = (): FileStorageService => {
  return useAppStore();
};
