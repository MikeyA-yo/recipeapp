"use client"
import { useDebouncedCallback } from "use-debounce";
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
    let resultComponent;

    if (val !=="ingredient" && term === "") {
        resultComponent = <></>;
    }else if (val === 'country') {
      resultComponent = <AreaResult term={term} />;
    } else if (val === 'categories') {
      resultComponent = <CategoryResult term={term} />;
    } else if (val === 'ingredient') {
      resultComponent = <IngredientResult term={term} />;
    } else if (val === 'name') {
      // Handle 'name' case if needed
    }
  
    return resultComponent;
}

export default function Search(){
    const [value,setValue] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    let placeholder = `Search by ${value ?? '...'} `;
   
    return (
        <>
        <div className="flex lg:gap-8 gap-5 overflow-hidden lg:flex-row flex-col">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-24 grid-cols-1 gap-5">
           <Result val={value} term={searchTerm} />
        </div>
        </>
    )
}