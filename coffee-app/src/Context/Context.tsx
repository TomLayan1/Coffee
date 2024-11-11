import { createContext, ReactNode, useState } from 'react';
import CoffeeData from '../data/CoffeeData';
import { CoffeeAndBeanDataType } from '../interface';
import BeansData from '../data/BeanData';
import { CoffeeAndBeansDetailsType } from '../interface';



export interface CoffeeShopContextType {
  coffeeDatas: CoffeeAndBeanDataType[];
  beanDatas: CoffeeAndBeanDataType[];
  handleBeansDetail: (id: string) => void;
  handleCoffeeDetail: (id: string) => void
}

export const CoffeeShopContext = createContext<CoffeeShopContextType>({
  coffeeDatas: [],
  beanDatas: [],
  handleBeansDetail: () => {},
  handleCoffeeDetail: () => {},
});


interface CoffeeShopContextProviderProps {
  children: ReactNode
}

export const CoffeeShopContextProvider: React.FC<CoffeeShopContextProviderProps> = ({ children }) => {
  // Coffee data
  const [coffeeDatas, setCoffeeDatas] = useState<CoffeeAndBeanDataType[]>(CoffeeData);
  
  // Bean data
  const [beanDatas, setBeanDatas] = useState<CoffeeAndBeanDataType[]>(BeansData);

    // Beans deatails
  const [coffeeDetail, setCoffeeDetail] = useState<CoffeeAndBeansDetailsType | null>(null)
  console.log(coffeeDetail)

  // Beans deatails
  const [beansDetail, setBeansDetail] = useState<CoffeeAndBeansDetailsType | null>(null)
  console.log(beansDetail)

  // Function for getting beans details
  const handleCoffeeDetail = (id: string) => {
    const selectedBeans = CoffeeData.find(bean => bean.id === id)
    selectedBeans && setBeansDetail(selectedBeans)
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
    handleCoffeeDetail
  }

  return (
    <CoffeeShopContext.Provider value={contextValue}>
     { children}
    </CoffeeShopContext.Provider>
  )
}