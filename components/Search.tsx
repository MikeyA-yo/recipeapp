"use client"
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon, XMarkIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import { AreaResult, CategoryResult, IngredientResult, DetailedRecipeName } from "./results";
import Link from "next/link";



function Reccomend(){
    let recommend;
    const [x, setX] = useState<boolean>(true);
    if (x === true) {
        recommend = 
        <div>
            <i className="flex gap-2 text-red-400">i recommend searching by ingredient or category <XCircleIcon className="h-10 lg:h-6 lg:w-6 md:h-6 md:w-6 text-red-700 w-10" onClick={ () =>{ setX(false)}}  /></i>
            <p><Link href={`/ingredient`}>View a valid list of ingredients <span className="underline-offset-auto text-blue-700">here</span></Link></p>
        </div>
    }else{
        recommend = <></>
    }
    return recommend;
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
      resultComponent = <DetailedRecipeName term={term} />
    }
  
    return resultComponent;
}

export default function Search(){
    const [value,setValue] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    let placeholder = `Search by ${value ?? '...'} `;
    const setSearch = useDebouncedCallback((term:string)=>{
        setSearchTerm(term)
    }, 700)
   
    return (
        <>
        <div className="flex lg:gap-8 gap-5 overflow-hidden lg:flex-row flex-col">
            <label htmlFor="search" >
                Search
            </label>
            <input type="search" className="h-12 w-full" id="search" name="search" placeholder={placeholder} onChange={e =>{
                setSearch(e.target.value);
            }}/>
            <MagnifyingGlassIcon className="h-6 w-6 text-slate-600" aria-label="search icon" />
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
        <Reccomend />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-24 grid-cols-1 gap-5">
           <Result val={value} term={searchTerm} />
        </div>
        </>
    )
}