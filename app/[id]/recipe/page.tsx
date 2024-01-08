import { DetailedRecipe } from "@/components/results";


export default function Page({params}:{params:{id:string}}){
    return (
        <>
        <DetailedRecipe term={params.id} />
        </>
    )
}