import { GraphQLClient } from 'graphql-request'
import { Cards } from '@/components/Cards/Cards'

export const fetchHygraphQuery = async() => {

    const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH as string)
    const { cards }: Cards = await hygraph.request(
        `
        {
            cards(orderBy: createdAt_DESC) {
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