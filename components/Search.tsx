"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
// import * as MagnifyingGlassIcon  from '@heroicons/react/outline';
import { useState,useEffect } from "react";
import { fetchByArea, fetchByMain } from "@/app/fetch";
import { AreaResult, CategoryResult, IngredientResult } from "./results";

function getResult(val:string, term:string){
    console.log(val, term);
    if (val == 'country'){
        return (<AreaResult term={term} />)
    }else if(val == 'categories'){
        return (<CategoryResult term={term} />)
    }else if(val == 'ingredients'){
        return (<IngredientResult term={term} />)
    }else if (val == 'name'){

    }
}

function Result({ val,term }:{term:string, val:string}){
    console.log(val, term);
    if (val == 'country'){
        return (<AreaResult term={term} />)
    }else if(val == 'categories'){
        return (<CategoryResult term={term} />)
    }else if(val == 'ingredients'){
        return (<IngredientResult term={term} />)
    }else if (val == 'name'){

    }
    return null;
    // return ( getResult(val, term));
}

export default function Search(){
    const [value,setValue] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    let placeholder = `Search by ${value ?? '...'} `;
    // useEffect(()=>{
    //     console.log(value,searchTerm)
    //    if (value && searchTerm){
    //      <Result val={value} term={searchTerm} />
    //    }
    // },[value, searchTerm])
   
    return (
        <>
        <div className="flex gap-8 overflow-hidden lg:flex-row flex-col">
            <label htmlFor="search" >
                Search
            </label>
            <input type="search" id="search" name="search" placeholder={placeholder} onChange={e =>{
                setSearchTerm(e.target.value);
            }}/>
            <MagnifyingGlassIcon className="h-6 w-6 text-slate-600" />
            <select name="options" id="options" value={value} onChange={(e) =>{
                setValue(e.target.value)
            }}>
                <option value={``} >Select a search option</option>
                <option value={`categories`}>categories</option>
                <option value={`ingredient`}>ingredient</option>
                <option value={`name`}>name</option>
                <option value={`country`}>country or region</option>
            </select>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {/* <AreaResult term="Chinese" />
            <IngredientResult term="cheese" /> */}
           {/* <Result  val={`country`} term={`Canadian`} /> */}
        </div>
        </>
    )
}