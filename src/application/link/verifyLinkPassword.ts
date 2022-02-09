import { analysePassword } from '@Lib/utils/password.utils';
import { AlertMessages } from '@Enums/config/messages.enum';

export function useVerifyLinkPassword() {
  const verifyLinkPassword = async (
    password: string | null | undefined,
    confirmPassword: string
  ) => {
    try {
      if (!password) throw new Error(AlertMessages.NO_PASSWORD_LINK);

      const isSamePassword = analysePassword(password, confirmPassword);

      if (!isSamePassword)
        throw new Error(AlertMessages.PASSWORD_DOES_NOT_MATCH);

      return { isSamePassword };
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { verifyLinkPassword };
}
