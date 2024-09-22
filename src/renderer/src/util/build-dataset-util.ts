import { DatasetEntity } from '@renderer/lib/generated/client';
import { Dataset } from '@renderer/types/dataset';

export const buildDataset = (dataset: DatasetEntity): Dataset => {
  return {
    id: dataset.id || '',
    title: dataset.attributes?.title || '',
    url: dataset.attributes?.url || '',
    organization: dataset.attributes?.organization || '',
    assetUrl: dataset.attributes?.file?.data?.attributes?.url || '',
    extension: dataset.attributes?.extension || '',
  };
};
