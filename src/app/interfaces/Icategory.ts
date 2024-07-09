export interface ICategory{
    [index: string]: ICategoryItem[],
  }
  
export interface ICategoryItem{
    "name": string,
    "selected": boolean
  }