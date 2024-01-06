"use server";
import { cache } from "react";
import Category from "./Categories";
import NoMeal from "./ui/Null";
import { MainIngResult } from "./Searches";
import IngList from "./Ingredients";

export interface CateProp{
    idCategory: number,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string,
}
export interface MealProp{
    strMeal:string,
    strMealThumb:string,
    idMeal:number,
}

export interface IngProp{
    idIngredient: string,
    strIngredient:string,
    strDescription:string | null,
    strType:string | null,
}

 export async function fetchCategory(){
    const response = await fetch(`
    https://www.themealdb.com/api/json/v1/1/categories.php`, {cache :'no-store'});
    const data = await response.json();
    return data.categories.map((item: CateProp, index: number) => {
       return <Category category={item} key={item.idCategory} /> 
    });
    // ((item: CateProp, index: number) => {
    //     <Category category={item} key={item.idCategory} />;
    //   });
}

export async function fetchByMain(ing : string) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`, {cache: 'no-store'});
    const data = await response.json();
    if (data.meals == null){
        return (
            <NoMeal term={`${ing}`} />
        )
    }
    return data.meals.map((item:MealProp,index:number) =>{
        return (
            <MainIngResult text={item} key={index} />
        )
    });
}

export async function fetchByArea(area:string){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`, {cache:'no-store'});
    const data = await response.json();
    if (data.meals == null){
        return (
            <NoMeal term={area} />
        )
    }
   return data.meals.map((item:MealProp,index:number) =>{
        return (
            <MainIngResult text={item} key={index} />
        )
    });
}
// fetchByArea('ch');
export async function fetchByCategory(category:string){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, {cache:'no-store'});
    const data = await response.json();
    if (data.meals == null){
        return (
            <NoMeal term={category} />
        )
    }
    return data.meals.map((item:MealProp,index:number) =>{
        return (
            <MainIngResult text={item} key={index} />
        )
    });
}

export async function fetchIngredients() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`, {cache:'no-store'});
    const data = await response.json();
    return data.meals.map((item:IngProp, index:number) =>{
        return <IngList term={item} key={index} />
    })
}

export async function fetchByName(name:string) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`, {cache:'no-store'});
    const data = await response.json();
    console.log(data);
}
fetchByName('big mac');