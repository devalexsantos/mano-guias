import Image from "next/image"
import Link from "next/link"

export type Card = {
    id: number,
    title: string,
    description: string,
    url: string,
    image: {
        url: string
    }
}

export type Cards = {
    cards: Card[]
}

export default function Cards({cards}: Cards) {
    return(
        <div className="flex justify-center max-w-5xl m-auto mt-10 flex-wrap">
            {cards.map((item)=>(
                <Link href={item.url} key={item.id} className="m-3" target="_blank" rel="">
                    <div className="flex flex-col gap-2 max-w-[360px]">
                        <Image className="border border-rose-700" src={item.image.url} width={360} height={202} alt={item.title}/>
                        <h1 className="font-bold">{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}