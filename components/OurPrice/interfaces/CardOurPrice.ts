interface DescriptionCard {
  icon: boolean;
  description: string;
}

export interface OurPriceCardProps {
  isBestSeller: boolean;
  package: string;
  price: number;
  perPackage: string;
  buttonText: string;
  features: DescriptionCard[];
}
