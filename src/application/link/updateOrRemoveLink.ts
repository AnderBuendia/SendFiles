import { updateLink, getTotalDownloads } from '@Domain/link';
import { Link } from '@Interfaces/domain/link.interface';
import { AlertMessages } from '@Enums/config/messages.enum';
import { useFileStorage } from '@Services/storageAdapter';
import { useFile } from '@Services/fileAdapter';
import { useLink } from '@Services/linkAdapter';

const INCREMENT_TOTAL_DOWNLOADS = 1;

export function useUpdateOrRemoveLink() {
  const { deleteFileRequest } = useFile();
  const { updateLinkRequest, deleteLinkRequest } = useLink();
  const { setUrlDownloadFile } = useFileStorage();

  const updateOrRemoveLink = async (link: Link | null) => {
    try {
      if (!link) throw new Error(AlertMessages.NO_DATA_LINK);

      const incrementTotalDownloads =
        link.total_downloads + INCREMENT_TOTAL_DOWNLOADS;

      const updatedLink = updateLink({
        total_downloads: incrementTotalDownloads,
        link,
      });

      const reachLimitDownloads = getTotalDownloads(
        updatedLink.downloads,
        updatedLink.total_downloads
      );

      console.log({ updatedLink, reachLimitDownloads });

      if (reachLimitDownloads) {
        const data = await Promise.any([
          deleteFileRequest({ filename: updatedLink.name }),
          deleteLinkRequest({
            url_query: updatedLink.url_query,
          }),
        ]);

        setUrlDownloadFile(null);
        console.log(data);
      } else {
        await updateLinkRequest({ updatedLink });
      }
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { updateOrRemoveLink };
}
