export interface IMenuItem {
  _id: string;
  name: string;
  image: string;
  price: number | null;
  weight: number;
  description: string;
}

export interface IMenuItemFromServer {
  _id: string;
  name: string;
  imageUrl: string;
  imagePublicId: string;
  price: number | null;
  weight: number;
  description: string;
}
