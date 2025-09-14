import { useEffect, useState } from 'react'
import { generateClient } from 'aws-amplify/api'

type Category = {
  id: string
  name: string
  slug: string
  createdAt?: string
}

const client = generateClient()

export function useAmplifyCategories(limit = 20) {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let canceled = false
    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await client.graphql({
          query: `
            query ListCategories($limit: Int) {
              listCategories(limit: $limit) {
                items {
                  id
                  name
                  slug
                  createdAt
                }
              }
            }
          `,
          variables: { limit },
        }) as any

        if (!canceled) {
          const items = response.data?.listCategories?.items || []
          setCategories(items)
        }
      } catch (err) {
        if (!canceled) {
          console.error('Categories fetch error:', err)
          setError('Failed to load categories')
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

  return { categories, loading, error }
}

