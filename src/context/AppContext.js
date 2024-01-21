import { createContext, useState } from "react";

import { baseUrl } from "../baseUrl";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export  const AppContext=createContext();

export default function AppContextProvider({children}){
    const[loading, setLoading]=useState(false);
    const[desc,setDesc]=useState("");
    const[currentpage, setCurrentpage]=useState(1);
    const[totalpage, setTotalpage]=useState(null);

    async function fetchData(page=1){
        setLoading(true);
  
        const url=`${baseUrl}?page=${page}`;
        try{
              const result=await fetch(url);
              
              const data=await result.json();
              setCurrentpage(data.page);
              setDesc(data.posts);
              setTotalpage(data.totalPages);
        }
        catch(err){
            toast.error("api call is not successful");
            setCurrentpage(1);
            setDesc([]);
            setTotalpage(null);

        }
        setLoading(false);  
    }
 
 function recentpage(page){
    setCurrentpage(page);
    fetchData(page);
 }

    const value={
        loading,
        setLoading,
        desc,
        setDesc,
        currentpage,
        setCurrentpage,
        totalpage,
        setTotalpage,
        fetchData,
        recentpage
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}