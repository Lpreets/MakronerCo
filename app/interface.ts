export interface simpliefiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    name: string;
    price_id: string;
}

export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    name: string;
    description: string;
    price_id: string;
}

export interface category {
    _id: string;
    name: string;
    image: string;
    description: string;
}

export interface information {
    _id: string;
    name: string;
    descriptionshort: string;
    descriptionlong: string;
}

export interface personligDesign {
    _id: string;
    images: any;
    description: string;
}