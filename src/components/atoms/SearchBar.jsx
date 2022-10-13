import React from "react"
import {data} from "../../util/data"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { EstateState } from "../../EstateContext";

export default function SearchBar({text}) {

    const {search,setSearch}=EstateState();

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={data}
            getOptionLabel={(option)=>option['name']}
            sx={{ width: 300,background:'#fff' }}
            renderInput={(params) => <TextField {...params} label={text}   />}
            onChange={(e,val)=>{
                if(val!==null && val!=='')
                    setSearch(val.name);
                else 
                    setSearch("")}}
        />
    )
}