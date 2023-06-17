import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query"
import Cards from "@/components/Cards/Cards"

export default async function Home() {
  const response = await fetchHygraphQuery()

  return (
    <div>
      <Cards cards={response}/>
    </div>
  )
}
