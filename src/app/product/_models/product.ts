export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  subImages?: Array<string>;
}

export const products = [
  {
    id: 1,
    name: 'V Neck T-Shirt',
    price: 24,
    image: 'assets/shirtvneck.png',
    subImages: [
      'assets/subImage1.png',
      'assets/subImage2.png',
      'assets/subImage3.png',
    ]
  },
  {
    id: 2,
    name: 'Original Monks',
    price: 14,
    image: 'assets/originalmonks.png'
  },
];

