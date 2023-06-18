import { GraphQLClient } from 'graphql-request'
import { Cards } from '@/components/Cards/Cards'


export const fetchHygraphQueryFilterByTags = async(slug: string) => {

    const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH as string)
    const { cards }: Cards = await hygraph.request(
        `
        {
            cards(where: {tags_some: {title_in: "${slug}"}}, orderBy: updatedAt_DESC) {
                id
                url
                title
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