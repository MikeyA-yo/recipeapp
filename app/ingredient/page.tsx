"use client"
import  { Ingredients, IngredientsF } from "@/components/Ing-Card";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Ingredient(){
  const [search, setSearch] = useState("");
  function List({search}:{search:string}){
    let list;
    if (search) {
      list = <IngredientsF filter={search} />
    } else {
     list = <Ingredients />
    }
    return list;
  }
    return (
        <main className="flex flex-col lg:p-24 gap-3"> 
        <div className="flex gap-2 hover:bg-slate-200 w-40">
          <Link href={`/`} className="flex gap-2"><ArrowLeftCircleIcon className="h-6 w-6" aria-label="go back icon"/> Go back </Link>
        </div>
          <div className="flex gap-5">
          <label htmlFor="search" >
                Search
            </label>
            <input type="search" id="search" name="search" placeholder="search ingredient" onChange={e =>{
                setSearch(e.target.value);
            }}/>
          </div>
          <List search={search} />
        </main>
    )
}