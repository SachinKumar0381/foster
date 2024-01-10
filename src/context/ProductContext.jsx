import axios from 'axios';
import React, { createContext, useState } from 'react';

export const ProductContext=createContext();

const ProductContextProvider=({children})=>{
    const [item,setItem] = useState({});

    const handleSet = (itm)=>{
        setItem(itm)
    }

    return(
    <ProductContext.Provider value={{handleSet,item}}>{children}</ProductContext.Provider>)
}
export default ProductContextProvider;