import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query"
import Cards from "@/components/Cards/Cards"
import CardsFixeds from "@/components/CardsFixeds/CardsFixeds"
import { fetchHygraphQueryFixeds } from "@/utils/fetch-hygraph-query-fixeds"

export default async function Home() {
  const response = await fetchHygraphQuery()
  const fixeds = await fetchHygraphQueryFixeds()

  return (
    <div>
      <CardsFixeds cards={fixeds}/>
      <Cards cards={response}/>
    </div>
  )
}

export const revalidate = 10
