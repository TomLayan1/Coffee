export interface Coffee {
  id: number,
  name: string
}

interface CoffeePrice {
  size: string;
  price: string;
  currency: string;
}
export interface CoffeeAndBeanDataType {
    id: string,
    name: string,
    description: string,
    roasted: string,
    imagelink_square: string,
    imagelink_portrait: string,
    ingredients: string,
    special_ingredient: string,
    prices: CoffeePrice[],
    average_rating: number,
    ratings_count: string,
    favourite: boolean,
    type: string,
    index: number,
}