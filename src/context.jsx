
import React, { useContext, useEffect, useState } from "react"

const AppContext= React.createContext();
// const API_URL=`https://example-data.draftbit.com/books?_limit=51`;
const  API_URL = `https://example-data.draftbit.com/books?_limit=100`;

const AppProvider =({children})=>{
    const [loading, setIsLoading]=useState(true);
    const [books, setBook]=useState([]);
    const [isError, setisError]=useState({
        show:"false",
        msg : ""
    });
   
    const getBooks=async (url)=>{
        try{
            const res= await fetch(url);
            const data=await res.json();
            console.log(data);
            if(data){
                setIsLoading(false);
                setBook(data);
              
            }else{
                setisError({
                   show:true,
                   msg: data.error 
       
                        })
                   }
           
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getBooks(`${API_URL}`)
    },[])
    return(
        <AppContext.Provider value={{isError,loading,books,}}>
    {children}        
        </AppContext.Provider>
    )

};
//use global hook
const useGlobalContext = () => {
    return(
        useContext(AppContext)
    )
}
export{AppContext, AppProvider,useGlobalContext}