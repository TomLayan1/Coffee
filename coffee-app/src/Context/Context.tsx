import { createContext, ReactNode, useState } from 'react';
import CoffeeData from '../data/CoffeeData';
import { CoffeeAndBeanDataType } from '../interface';
import BeansData from '../data/BeanData';



export interface CoffeeShopContextType {
  coffeeData: CoffeeAndBeanDataType[];
  beanData: CoffeeAndBeanDataType[];
}

export const CoffeeShopContext = createContext<Partial<CoffeeShopContextType>>({});

interface CoffeeShopContextProviderProps {
  children: ReactNode
}

export const CoffeeShopContextProvider: React.FC<CoffeeShopContextProviderProps> = ({ children }) => {
  
  const [coffeeData, setCoffeeData] = useState<CoffeeAndBeanDataType[]>(CoffeeData);
  const [beanData, setBeanData] = useState<CoffeeAndBeanDataType[]>(BeansData);

  console.log(coffeeData);

  const contextValue: CoffeeShopContextType = {
    coffeeData,
    beanData
  }

  return (
    <CoffeeShopContext.Provider value={contextValue}>
     { children}
    </CoffeeShopContext.Provider>
  )
}