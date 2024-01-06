"use client"
import CardCate from "@/components/Categ-card";
import Category from "./Categories";
import { fetchCategory, CateProp, fetchByCategory } from "./fetch";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { CardSkeleton, CardsSkeleton } from "./ui/Skeletons";
import dynamic from 'next/dynamic'
import Slides from "@/components/Swipes";
import Search from "@/components/Search";
import { AreaResult, CategoryResult, IngredientResult } from "@/components/results";
import Ingredients from "@/components/Ing-Card";
 

export default function Home() {
  // const [fetchCat, setFetchCat] = useState(false)
  // useEffect(() =>{
  //   // fetchCategory()
  //   // .then(res =>{
  //   //    setFetchCat([...fetchCat, ...res])
  //   setFetchCat(true);
  //   // })
  // }, []);
  return (
    <main className="lg:p-24 p-10 min-h-20 flex  flex-col gap-8">
      <div className="min-h-screen before:bg-gradient-to-r before:from-transparent before:via-white/60 before:absolute before:inset-0 lg:bg-slate-50">
         <Slides />
      </div>
      <div>
        <Search />
      </div>
      <Suspense fallback={<CardsSkeleton />} >
        <CardCate />
     </Suspense>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
     {/* <AreaResult term="American" /> */}
     {/* <CategoryResult term="breakfast" />
     <IngredientResult term="cheese" /> */}
     </div>
    </main>
  );
}
