import { createContext, useContext, useEffect, useRef, useState } from "react";
import {data} from "./util/data"

const Estate=createContext();

const EstateContext=({children})=>{
    const [filters, setFilters] = useState({"city":"","date":null,"price":null,"type":null});
    const [search, setSearch] = useState("");
    const [filteredArray,setFilteredArray]=useState(data);
    console.log(filters);

    useEffect(() => {
        if(search!=="")
        {const arr=data.filter((item)=>item.name===search)
        setFilteredArray(arr);}
        else 
            setFilteredArray(data);
    }, [search])

    const isInitialMount=useRef(true);

    useEffect(() => {
    if(isInitialMount.current)
    {
        if (isInitialMount.current) {
            isInitialMount.current = false;
    }}
    else 
    {
            let arr=data;
            if(filters.city)
                arr=arr.filter((item)=> item.location===filters.city);
            if(filters.date)
                arr=arr.filter((item)=> {
                    const tempDate=new Date(item.moveInDate);
                    if(tempDate<filters.date)
                        return true;
                    else 
                        return false;
                });
            if(filters.price)
                arr=arr.filter((item)=>{
                    if(item.price>=filters.price.lp && item.price<=filters.price.up)
                        return true;
                    else 
                        return false
                })
            if(filters.type)
                arr=arr.filter((item)=>item.propertyType===filters.type)
        setFilteredArray(arr);
    }
    }, [filters]);
    
    

    return (
        <Estate.Provider value={{filters,setFilters,search,setSearch,filteredArray}} >
            {children}
        </Estate.Provider>
    )
}

export default EstateContext

export const EstateState=()=>{
    return useContext(Estate);
}