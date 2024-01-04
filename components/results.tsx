import { fetchByArea } from "@/app/fetch";
import { fetchByMain } from "@/app/fetch";
import { fetchByCategory } from "@/app/fetch";

export function AreaResult({term}:{term:string}){
    return (fetchByArea(term));
}

export function  CategoryResult({term}:{term:string}){
   return (
    fetchByCategory(term)
   )
}

export function IngredientResult({term}:{term:string}){
    return (
        fetchByMain(term)
    )
}