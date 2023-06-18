"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Tag = {
    tags: {
        title: string
    }[]
}

export default function Tags({tags}: Tag){

    const pathname = usePathname();

    return(
        <div className="w-full m-auto flex justify-center mt-4">
            <ul className="flex gap-2">
                {tags.map((item, index)=> (
                    <Link key={index} href={`${pathname}/${item.title}`}>
                        <li className={`text-sm p-1 border rounded`}>{item.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}