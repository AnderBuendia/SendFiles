import { useLink } from '@Services/linkAdapter';
import { AlertMessages } from '@Enums/config/messages.enum';

export function useGetLink() {
  const { getLinkRequest } = useLink();

  const getLink = async (url_query: string) => {
    try {
      if (!url_query) throw new Error(AlertMessages.NO_URL);

      const { data, error } = await getLinkRequest({
        url_query,
      });

      if (error) throw new Error(error.message);

      if (!data) return null;

      return { data: data[0] };
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { getLink };
}
