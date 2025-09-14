export type UiProduct = {
  id: string
  title: string
  brand: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  discount?: number
  isFlashSale?: boolean
  badges?: string[]
}

import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/api'
import { listProducts } from '@/graphql/queries'

const client = generateClient()

export function useAmplifyProducts(limit = 24) {
  const [items, setItems] = useState<UiProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false
    ;(async () => {
      setLoading(true)
      try {
        const res = await client.graphql({
          query: listProducts as any,
          variables: { limit },
        }) as any
        const data = res?.data?.listProducts?.items ?? []
        const mapped: UiProduct[] = data.map((p: any) => ({
          id: p.id,
          title: p.title,
          brand: '',
          price: p.price ?? 0,
          rating: 4.6,
          reviewCount: 120,
          image: p.imageUrls?.[0] ?? '/placeholder.svg',
        }))
        if (!canceled) setItems(mapped)
      } catch (e: any) {
        if (!canceled) setError(e?.message ?? 'Failed to load products')
      } finally {
        if (!canceled) setLoading(false)
      }
    })()
    return () => { canceled = true }
  }, [limit])

  return { items, loading, error }
}

