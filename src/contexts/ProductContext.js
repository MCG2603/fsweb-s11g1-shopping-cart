import { createContext, useState } from 'react';
import { data } from '../data';

export const MyContextObject = createContext();

const MyContextProvider=({ children })=>{
    const [products, setProducts] = useState(data);

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
      // verilen itemi sepete ekleyin
      setCart([...cart,item])
    };
return(
    <MyContextObject.Provider
    value={{products,addItem,cart,setCart}}
  >
          {children}

  </MyContextObject.Provider>
  
  )
}

export default MyContextProvider;