"use client"
import { MealProp } from "./fetch";
import { Montserrat } from "next/font/google";
import { fetchByMain } from "./fetch";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const mont = Montserrat({weight:["600", "900"], subsets:["cyrillic-ext"]});

export  function MainIngResult({text}:{text:MealProp}){
   const router = useRouter();
    return (
    <>
       <div className={`${mont.className} flex flex-col  gap-5 justify-center content-center  `}>
          <Image unoptimized src={text.strMealThumb} alt={`Image of ${text.strMeal}`} width={120} height={120} />
          <h1 className="text-3xl hover:text-slate-800" >{text.strMeal}</h1>
          <button
          onClick={() => router.push(`${text.idMeal}/recipe`) }
          className="w-40 hover:text-gray-200 hover:text-xl hover:bg-gray-800 hover:opacity-75  rounded-xl"
          >
            View Recipe
            </button>
       </div>
    </>
    )
}