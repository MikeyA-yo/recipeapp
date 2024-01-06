import { fetchByArea } from "@/app/fetch";
import { fetchByMain } from "@/app/fetch";
import { fetchByCategory } from "@/app/fetch";
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