export interface Product {
  url: string;
  title: string;
  asin: string;
  price: string;
  brand: string;
  product_details: string;
  breadcrumbs: string;
  images_list: string[];
  features: Feature[];
}

export interface Feature {
  'Outer Material'?: string;
  'Inner Material'?: string;
  Sole?: string;
  Closure?: string;
  'Heel Height'?: string;
  'Heel Type'?: string;
  'Shoe Width'?: string;
}
