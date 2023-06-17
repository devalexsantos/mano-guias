import { GraphQLClient } from 'graphql-request'

interface Categorie {
        id: string,
        title: string,
        slug: string
}

interface Categories {
    categories: Categorie[]
}

export const fetchHygraphQuerySlug = async() => {

    const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH as string)
    const { categories }: Categories = await hygraph.request(
        `
        {
            categories {
              id
              title
              slug
            }
          }
        
        `
    )

    return categories
}