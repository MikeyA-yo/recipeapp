import { DetailedRecipe } from "@/components/results";
import { Suspense } from "react";
import { CardsSkeleton } from "@/app/ui/Skeletons";

export default function Page({params}:{params:{id:string}}){
    return (
        <>
        <Suspense fallback={<CardsSkeleton />} >
           <DetailedRecipe term={params.id} />
        </Suspense>
        </>
    )
}