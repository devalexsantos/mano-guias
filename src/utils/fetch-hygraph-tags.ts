import { GraphQLClient } from 'graphql-request'

interface Tags {
        title: string
}

interface TagsProps {
    tags: Tags[]
}

export const fetchHygraphQueryTags = async(slug: string) => {

    const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_API_HYGRAPH as string)
    const { tags }: TagsProps = await hygraph.request(
        `
        {
            tags(where: {category: {slug: "${slug}"}}) {
                title
            }
        }
        
        `
    )

    return tags
}