import { createContext, ReactNode, useState } from 'react';
import CoffeeData from '../data/CoffeeData';
import { CoffeeAndBeanDataType } from '../interface';
import BeansData from '../data/BeanData';
import { CoffeeAndBeansDetailsType } from '../interface';



export interface CoffeeShopContextType {
  coffeeDatas: CoffeeAndBeanDataType[];
  beanDatas: CoffeeAndBeanDataType[];
  handleBeansDetail: (id: string) => void;
  handleCoffeeDetail: (id: string) => void;
  coffeeDetail: CoffeeAndBeansDetailsType | null;
  beansDetail: CoffeeAndBeansDetailsType | null
}

export const CoffeeShopContext = createContext<CoffeeShopContextType>({
  coffeeDatas: [],
  beanDatas: [],
  handleBeansDetail: () => {},
  handleCoffeeDetail: () => {},
  coffeeDetail: null,
  beansDetail: null
});


interface CoffeeShopContextProviderProps {
  children: ReactNode
}

export const CoffeeShopContextProvider: React.FC<CoffeeShopContextProviderProps> = ({ children }) => {
  // Coffee data
  const [coffeeDatas, setCoffeeDatas] = useState<CoffeeAndBeanDataType[]>(CoffeeData);
  console.log(coffeeDatas)
  // Bean data
  const [beanDatas, setBeanDatas] = useState<CoffeeAndBeanDataType[]>(BeansData);

    // Beans deatails
  const [coffeeDetail, setCoffeeDetail] = useState<CoffeeAndBeansDetailsType | null>(null)

  // Beans deatails
  const [beansDetail, setBeansDetail] = useState<CoffeeAndBeansDetailsType | null>(null)

  // Function for getting beans details
  const handleCoffeeDetail = (id: string) => {
    const selectedCoffee = CoffeeData.find(bean => bean.id === id)
    selectedCoffee && setCoffeeDetail(selectedCoffee)
  }

  // Function for getting beans details
  const handleBeansDetail = (id: string) => {
    const selectedBeans = BeansData.find(bean => bean.id === id)
    selectedBeans && setBeansDetail(selectedBeans)
  }

  const contextValue: CoffeeShopContextType = {
    coffeeDatas,
    beanDatas,
    handleBeansDetail,
    handleCoffeeDetail,
    coffeeDetail,
    beansDetail
  }

  return (
    <CoffeeShopContext.Provider value={contextValue}>
     { children}
    </CoffeeShopContext.Provider>
  )
}