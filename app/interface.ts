export interface simpliefiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    name: string;
}

export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    name: string;
    description: string;
}