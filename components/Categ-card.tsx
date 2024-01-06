import { fetchCategory } from "@/app/fetch";
import { useEffect, useState } from "react";

export default function CardCate(){
    const [ results, setResults ] = useState<any>();
    useEffect(() => {
        const result = fetchCategory()
        setResults(result)
    },[])
    return results
}