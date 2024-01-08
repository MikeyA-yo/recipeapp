"use client"
import CardCate from "@/components/Categ-card";
import { Suspense } from "react";
import { CardsSkeleton } from "./ui/Skeletons";
import Slides from "@/components/Swipes";
import Search from "@/components/Search";
 

export default function Home() {
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
     </div>
    </main>
  );
}
