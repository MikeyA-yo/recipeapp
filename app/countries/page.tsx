import { Countries } from "@/components/results";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function Page(){
    return (
        <div className="flex flex-col gap-5 items-center">
            <Link href={`/`} className="flex gap-2"><ArrowLeftCircleIcon className="h-6 w-6" aria-label="go back icon"/> Go back </Link>
          <Countries />
        </div>
    )
}