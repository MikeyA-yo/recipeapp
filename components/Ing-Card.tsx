"use client"
import { useState, useEffect } from "react";
import { fetchIngredients } from "@/app/fetch";

export  function IngredientsF({filter}:{filter?:string}){
    const [ results, setResults ] = useState<any>();

    useEffect(() => {
        const result = fetchIngredients(filter)
        setResults(result)
    },[ filter ])

    return results
    // return (
    //     fetchIngredients(filter)
    // )
}
export  function Ingredients(){
    const [ results, setResults ] = useState<any>();

    useEffect(() => {
        const result = fetchIngredients()
        setResults(result)
    },[  ])

    return results
    // return (
    //     fetchIngredients()
    // )
}