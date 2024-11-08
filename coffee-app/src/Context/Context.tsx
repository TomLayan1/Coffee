import { createContext, ReactNode, useState } from 'react';
import CoffeeData from '../data/CoffeeData';
import { CoffeeAndBeanDataType } from '../interface';
import BeansData from '../data/BeanData';



export interface CoffeeShopContextType {
  coffeeDatas: CoffeeAndBeanDataType[];
  beanDatas: CoffeeAndBeanDataType[];
}

export const CoffeeShopContext = createContext<Partial<CoffeeShopContextType>>({});

interface CoffeeShopContextProviderProps {
  children: ReactNode
}

export const CoffeeShopContextProvider: React.FC<CoffeeShopContextProviderProps> = ({ children }) => {
  
  const [coffeeDatas, setCoffeeDatas] = useState<CoffeeAndBeanDataType[]>(CoffeeData);
  const [beanDatas, setBeanDatas] = useState<CoffeeAndBeanDataType[]>(BeansData);

  console.log(coffeeDatas);

  const contextValue: CoffeeShopContextType = {
    coffeeDatas,
    beanDatas
  }

  return (
    <CoffeeShopContext.Provider value={contextValue}>
     { children}
    </CoffeeShopContext.Provider>
  )
}