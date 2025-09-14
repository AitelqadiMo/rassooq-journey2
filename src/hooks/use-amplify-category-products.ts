import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/api'
import { productsByCategoryIdAndTitle, categoryBySlug } from '@/graphql/queries'

type UiProduct = {
  id: string
  title: string
  brand?: string
  price: number
  image: string
}

const client = generateClient()

export function useAmplifyCategoryProducts(params: { categoryIdOrSlug?: string; limit?: number }) {
  const { categoryIdOrSlug, limit = 50 } = params
  const [items, setItems] = useState<UiProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false
    if (!categoryIdOrSlug) return
    ;(async () => {
      setLoading(true)
      try {
        let catId = categoryIdOrSlug
        // Try resolve as slug first
        try {
          const resSlug = await client.graphql({
            query: categoryBySlug as any,
            variables: { slug: categoryIdOrSlug, limit: 1 },
          }) as any
          const found = resSlug?.data?.categoryBySlug?.items?.[0]?.id
          if (found) catId = found
        } catch {}

        const res2 = await client.graphql({
          query: productsByCategoryIdAndTitle as any,
          variables: { categoryId: catId, limit },
        }) as any
        const data = res2?.data?.productsByCategoryIdAndTitle?.items ?? []
        const mapped: UiProduct[] = data.map((p: any) => ({
          id: p.id,
          title: p.title,
          brand: '',
          price: p.price ?? 0,
          image: p.imageUrls?.[0] ?? '/placeholder.svg',
        }))
        if (!canceled) setItems(mapped)
      } catch (e: any) {
        if (!canceled) setError(e?.message ?? 'Failed to load category products')
      } finally {
        if (!canceled) setLoading(false)
      }
    })()
    return () => { canceled = true }
  }, [categoryIdOrSlug, limit])

  return { items, loading, error }
}


