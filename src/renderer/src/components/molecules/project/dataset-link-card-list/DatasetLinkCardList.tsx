import { Dataset } from '@renderer/types/dataset'
import { DatasetCard } from '@renderer/components/molecules/project/dataset-card/DatasetCard'


interface DatasetCardListProps {
  datasetList: Dataset[]
}

const DatasetLinkCardList = ({ datasetList }: DatasetCardListProps) => {
  return datasetList.length > 0 ? (
    <div className="w-full">
      {datasetList.map((dataset, index) => {
        return (
          <a key={index} href={dataset.url} target="_blank" rel="noreferrer">
            <DatasetCard
              dataset={{
                id: dataset.id,
                title: dataset.title,
                organization: dataset.organization,
                url: dataset.url,
                assetUrl: dataset.assetUrl,
                extension: dataset.extension
              }}
            />
          </a>
        )
      })}
    </div>
  ) : (
    <div className="w-full h-[100px] bg-gray-50 rounded-xl text-gray-600 flex justify-center items-center text-center">
      <p>登録データがありません</p>
    </div>
  )
}

export default DatasetLinkCardList
