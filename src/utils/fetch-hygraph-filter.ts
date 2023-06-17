import { GraphQLClient } from 'graphql-request'
import { Cards } from '@/components/Cards/Cards'


export const fetchHygraphQueryFilter = async(slug: string) => {

    const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH as string)
    const { cards }: Cards = await hygraph.request(
        `
        {
            cards(where: { category: { slug: "${slug}" } }, orderBy: createdAt_DESC) {
              id
              title
              url
              image {
                url
              }
              category {
                slug
              }
            }
          }
        
        `
    )

    return cards
}