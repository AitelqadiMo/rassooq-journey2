import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/api'
import { searchProducts } from '@/graphql/queries'

type SearchResult = {
  id: string
  title: string
  description?: string
  price: number
  imageUrls?: string[]
  categoryId: string
  sellerId: string
}

const client = generateClient()

export function useAmplifySearch(searchTerm: string, limit = 20) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false
    
    if (!searchTerm || searchTerm.length < 2) {
      setResults([])
      return
    }

    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        // Search by title using the searchProducts query
        const response = await client.graphql({
          query: searchProducts,
          variables: {
            searchTitle: searchTerm.toLowerCase(),
            limit,
          },
        }) as any

        if (!canceled) {
          const items = response.data?.searchProducts?.items || []
          setResults(items.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            imageUrls: item.imageUrls || [],
            categoryId: item.categoryId,
            sellerId: item.sellerId,
          })))
        }
      } catch (err) {
        if (!canceled) {
          console.error('Search error:', err)
          setError('Search failed')
          setResults([])
        }
      } finally {
        if (!canceled) {
          setLoading(false)
        }
      }
    })()

    return () => {
      canceled = true
    }
  }, [searchTerm, limit])

  return { results, loading, error }
}

// Hook for getting all products (fallback when search not available)
export function useAmplifyAllProducts(limit = 50) {
  const [items, setItems] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false
    ;(async () => {
      setLoading(true)
      try {
        const response = await client.graphql({
          query: `
            query ListProducts($limit: Int) {
              listProducts(limit: $limit) {
                items {
                  id
                  title
                  description
                  price
                  imageUrls
                  categoryId
                  sellerId
                }
              }
            }
          `,
          variables: { limit },
        }) as any

        if (!canceled) {
          const items = response.data?.listProducts?.items || []
          setItems(items)
        }
      } catch (err) {
        if (!canceled) {
          console.error('Products fetch error:', err)
          setError('Failed to load products')
        }
      } finally {
        if (!canceled) {
          setLoading(false)
        }
      }
    })()

    return () => {
      canceled = true
    }
  }, [limit])

  return { items, loading, error }
}

