"use client";

import { fetchHygraphQuerySlug } from "@/utils/fetch-hygraph-slug";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { TwitchLogo, YoutubeLogo } from "phosphor-react";
import { useEffect, useState } from "react";

type Categories = {
    id: string,
    title: string,
    slug: string
}

export default function Header(){
    const [categories, setCategories] = useState<Categories[]>([])

    async function getCategories(){
        const response = await fetchHygraphQuerySlug()
        setCategories(response)

    }

    useEffect(()=> {
        getCategories()
    }, [])

    const pathname = usePathname();

    return(
    <header className="w-full flex flex-col items-center justify-center mt-14">
        <Image src="/mono-imp.png" width={300} height={341} alt="Mano_Imp em forma de desenho caricato."/>

        <div className="flex flex-col items-center justify-center -mt-24 p-3 text-center">
            <h1 className="font-black text-2xl">BEM VINDO A CENTRAL DE <span className="text-teal-400">GUIAS</span> DO</h1>
            <h1 className="font-black text-5xl">MANO IMP</h1>
            <h3 className="mt-3">GUIAS ATUALIZADOS EM TEMPO REAL</h3>
            <div className="flex gap-2 justify-center">
                <Link href="https://youtube.com/@ManoImp" target="_blank"><YoutubeLogo size={32} weight="fill" /></Link>
                <Link href="https://www.twitch.tv/mano_imp" target="_blank"><TwitchLogo size={32} weight="fill" /></Link>
            </div>
        </div>

        <hr className="w-full border max-w-4xl opacity-5" />

        <nav className="mt-4">
            <ul className="flex gap-2 items-center flex-wrap">
                <li><Link href="/" className={pathname === '/' ? 'text-white p-1 rounded bg-red-500' : 'text-gray-200 p-1'}>Tudo</Link></li>
            {categories.map((item, index) => (
                <li key={index} className={ pathname === '/' + item.slug 
                ? 
                'text-white p-1 rounded bg-red-500'
                :
                'text-gray-200 p-1'}>
                    <Link href={item.slug}>
                        {item.title}
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    </header>
    )
}