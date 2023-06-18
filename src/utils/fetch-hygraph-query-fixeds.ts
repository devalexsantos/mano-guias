import { GraphQLClient } from 'graphql-request'
import { Cards } from '@/components/Cards/Cards'

export const fetchHygraphQueryFixeds = async() => {

    const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH as string)
    const { cards }: Cards = await hygraph.request(
        `
        {
            cards(where: {fixed: true}, orderBy: updatedAt_DESC) {
              id
              title
              url
              image {
                url
              }
            }
          }
        
        `
    )

    return cards
}