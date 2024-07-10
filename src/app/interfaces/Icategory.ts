export interface ICategoryItem{
    "name": string,
    "selected": boolean
  }

export interface CategoryObj{
  [key: string]:ICategoryItem[]
}