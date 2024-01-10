"use client"
import { fetchByCategory, fetchById, fetchByArea, fetchByMain, fetchByName, fetchValCountries } from "@/app/fetch";
import { useEffect, useState } from "react";

export function AreaResult({term}:{term:string}){
    const [ results, setResults ] = useState<any>();

    useEffect(() => {
        const result = fetchByArea(term)
        setResults(result)
    },[ term ])

    return results
}

export function  CategoryResult({term}:{term:string}){
    const [ results, setResults ] = useState<any>();

    useEffect(() => {
        const result = fetchByCategory(term)
        setResults(result)
    },[ term ])

    return results
}

export function IngredientResult({term}:{term:string}){
    const [ results, setResults ] = useState<any>();

    useEffect(() => {
        const result = fetchByMain(term)
        setResults(result)
    },[ term ])

    return results
}

export  function DetailedRecipe({term}:{term:string}){
    const [ results, setResults ] = useState<any>();

    useEffect(() => {
        const result = fetchById(term)
        setResults(result)
    },[ term ])

    return results
}
export  function DetailedRecipeName({term}:{term:string}){
    const [ results, setResults ] = useState<any>();

    useEffect(() => {
        const result = fetchByName(term)
        setResults(result)
    },[ term ])

    return results
}

export function Countries(){
    const [results,setResults] = useState<any>();

    useEffect(()=>{
        const results = fetchValCountries();
        setResults(results)
    },[])
    return results;
}