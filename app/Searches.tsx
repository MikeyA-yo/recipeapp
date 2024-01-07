import { MealProp } from "./fetch";
import { Montserrat } from "next/font/google";
import { fetchByMain } from "./fetch";
import Image from "next/image";
import Link from "next/link";


const mont = Montserrat({weight:["600", "900"], subsets:["cyrillic-ext"]});

export  function MainIngResult({text}:{text:MealProp}){
    return (
    <>
       <div className={`${mont.className} flex flex-col  gap-5 `}>
          <Image src={text.strMealThumb} alt={`Image of ${text.strMeal}`} width={120} height={120} />
          <h1 className="text-3xl" >{text.strMeal}</h1>
       </div>
    </>
    )
}