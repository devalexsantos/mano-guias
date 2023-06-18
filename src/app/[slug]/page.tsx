import Cards from "@/components/Cards/Cards"
import { fetchHygraphQueryFilter } from "@/utils/fetch-hygraph-filter"

type Params = {
    params: {
        slug: string
    }
}

export default async function Guia({params}: Params) {

    const response = await fetchHygraphQueryFilter(params.slug)

    return(
        <div>
            <Cards cards={response}/>
        </div>
    )
}

export const revalidate = 10