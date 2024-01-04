"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
// import * as MagnifyingGlassIcon  from '@heroicons/react/outline';
import { useState,useEffect } from "react";
import { fetchByArea } from "@/app/fetch";



export default function Search(){
    const [value,setValue] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    let placeholder = `Search by ${value ?? '...'} `;
   
    return (
        <div className="flex gap-8 overflow-hidden lg:flex-row flex-col">
            <label htmlFor="search" >
                Search
            </label>
            <input type="search" id="search" name="search" placeholder={placeholder} onChange={e =>{
                setSearchTerm(e.target.value);
                // if (value == 'country'){
                //     fetchByArea(searchTerm)
                // }
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
    )
}