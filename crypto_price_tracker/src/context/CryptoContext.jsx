
import React,{createContext, useContext, useEffect} from "react";
import { useState } from "react";

const Crypto = createContext();

const CryptoContext = ({children}) => {
    const [currency,setCurrency] = useState("INR"); 
    const [symbol,setSymbol] = useState("₹");

    useEffect(()=> {
        if(currency == "INR") setSymbol("₹");
       else if (currency == "USD") setSymbol("$");
    },[currency])
    
    return(
        <Crypto.Provider value={{currency,symbol,setCurrency}}>
           {children}
        </Crypto.Provider>
    )
}

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
};








// import React, { createContext, useContext, useEffect, useState } from 'react'


// export const Crypto = React.createContext() 
// // the code const Crypto = createContext() creates a React context named Crypto
// // React Context is a feature that allows you to share data across different components in your React application 
// // without having to explicility pass the data down the component tree


// export const CryptoContext = (children) => {
//   // we need 2 hooks to store the changing data as whenever the select option is triggered
//   // price will change and symbol of the price for all coins will also change respectively

//    const [currency,setCurrency] = useState("INR"); 
//    const [symbol,setSymbol] = useState("₹");

//    useEffect(()=> {
//        if(currency == "INR") setSymbol("₹");
//        else if (currency == "USD") setSymbol("$");
//    },[currency])

//  return (
//    <Crypto.Provider value={{currency,symbol,setCurrency}}>
//        {children}
//    </Crypto.Provider>
//  )
// }

// // export default CryptoContext;


// export default CryptoState = () => {
//     return useContext(Crypto);
// } 
// // In components that need access to the data provided by the Crypto Context, use the 'useContext' hook from React. 
// // This hook retrieves the context value from the nearest provider up the component tree.
// // TO export our state to whole app we will use useContext hook in React
