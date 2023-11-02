export interface MacaronCardProps {
  macaron: {
    id: string;
    image: string;
    title: string;
    price: string;
    description: string;
  };
}

export interface CompletesettCardProps {
  completesett: {
    id: string;
    image: string;
    title: string;
    price: string;
    description: string;
  };
}

export interface ProductCardProps {
  product: {
    id: string;
    image: string;
    title: string;
    description: string;
    links: {
      url: string;
      titleurl: string;
    };
  };
}
