import Cards from "@/components/Cards/Cards"
import Tags from "@/components/Tags/Tags"
import { fetchHygraphQueryFilter } from "@/utils/fetch-hygraph-filter"
import { fetchHygraphQueryTags } from "@/utils/fetch-hygraph-tags"

type Params = {
    params: {
        slug: string
    }
}

export default async function Guia({params}: Params) {

    const response = await fetchHygraphQueryFilter(params.slug)

    const tags = await fetchHygraphQueryTags(params.slug)

    return(
        <div>

            {tags && <Tags tags={tags} />}
            <Cards cards={response}/>
        </div>
    )
}