import Image from "next/image"
import Link from "next/link"
import IconDrawingPinFilled from "../IconDrawingPinFilled/IconDrawingPinFilled"

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

export default function CardsFixeds({cards}: Cards) {
    return(
        <div className="flex justify-center max-w-5xl m-auto mt-4 flex-wrap">
            {cards.map((item)=>(
                <Link href={item.url} key={item.id} className="m-3" target="_blank" rel="">
                    <div className="flex flex-col gap-2 max-w-[360px]">
                        <div className="flex justify-end -mb-8 z-50"><IconDrawingPinFilled width={32} height={32}/></div>
                        <Image className="border border-rose-700" src={item.image.url} width={360} height={202} alt={item.title}/>
                        <h1 className="font-bold">{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}