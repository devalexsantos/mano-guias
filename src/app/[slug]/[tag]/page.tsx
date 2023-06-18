import Cards from "@/components/Cards/Cards"
import { fetchHygraphQueryFilterByTags } from "@/utils/fetch-hygraph-filter-by-tags"

type Params = {
    params: {
        tag: string
    }
}

export default async function Page({params}: Params) {

    const response = await fetchHygraphQueryFilterByTags(params.tag)

    return(
        <div>
            <div className="flex justify-center m-auto mt-2 items-center gap-3">
                <span>Filtrando por:</span> <span className="text-white p-1 rounded bg-red-500">{params.tag}</span>
            </div>
            <Cards cards={response}/>
        </div>
        
    )
}

export const revalidate = 10