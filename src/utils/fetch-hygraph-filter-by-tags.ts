import { GraphQLClient } from 'graphql-request'
import { Cards } from '@/components/Cards/Cards'


export const fetchHygraphQueryFilterByTags = async(slug: string) => {

    const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH as string)
    const { cards }: Cards = await hygraph.request(
        `
        {
            cards(where: {tags_every: {title_in: "${slug}"}}, orderBy: createdAt_DESC) {
                id
                url
                image {
                  url
                }
                category {
                  slug
                }
                tags {
                  title
                }
            }
          }
        
        `
    )

    return cards
}