export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  type?: string;
  brand: string;
  sellerName: string;
  quantityInStock?: number;
  viewsCounter: number;
}

export interface ProductParams {
  orderBy: string;
  searchTerm?: string;
  types: string[];
  brands: string[];
  sellerNameList: string[];
  pageNumber: number;
  pageSize: number;
}
