import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/api'
import { getProduct, listProducts } from '@/graphql/queries'

type UiProduct = {
  id: string
  title: string
  brand?: string
  price: number
  originalPrice?: number
  rating?: number
  reviewCount?: number
  image: string
  imageUrls?: string[]
  badges?: string[]
}

const client = generateClient()

export function useAmplifyProduct(params: { id?: string; slug?: string }) {
  const { id, slug } = params
  const [item, setItem] = useState<UiProduct | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false
    if (!id && !slug) return
    ;(async () => {
      setLoading(true)
      try {
        let product: any | null = null
        if (id) {
          const res = await client.graphql({ query: getProduct as any, variables: { id } }) as any
          product = res?.data?.getProduct ?? null
        } else if (slug) {
          // Attempt naive reverse slug to title and match by equality
          const guessTitle = slug.replace(/-/g, ' ')
          const res = await client.graphql({
            query: listProducts as any,
            variables: { filter: { title: { eq: guessTitle } }, limit: 1 },
          }) as any
          product = res?.data?.listProducts?.items?.[0] ?? null
        }
        if (product && !canceled) {
          const mapped: UiProduct = {
            id: product.id,
            title: product.title,
            brand: '',
            price: product.price ?? 0,
            rating: 4.6,
            reviewCount: 120,
            image: product.imageUrls?.[0] ?? '/placeholder.svg',
            imageUrls: product.imageUrls ?? [],
          }
          setItem(mapped)
        }
      } catch (e: any) {
        if (!canceled) setError(e?.message ?? 'Failed to load product')
      } finally {
        if (!canceled) setLoading(false)
      }
    })()
    return () => { canceled = true }
  }, [id, slug])

  return { item, loading, error }
}



