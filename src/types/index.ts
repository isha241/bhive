export interface WorkspaceLocation {
  id: string;
  name: string;
  address: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  isAvailable: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}