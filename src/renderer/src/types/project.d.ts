import { Dataset } from '@rendered/types/dataset'
import { Recipe } from '@rendered/types/recipe'
import { FormattedFile } from '@rendered/types/formatted-file'

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  thumbnails: string[]
  resources: Dataset[]
  recipes: Recipe[]
  formattedFiles: FormattedFile[]
}
