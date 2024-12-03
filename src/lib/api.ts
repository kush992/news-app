import { NewsArticle } from '@/types/news'

export async function getNewsById(id: string): Promise<NewsArticle | null> {
  const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY

  if (!NEWSDATA_API_KEY) {
    throw new Error('API key not configured')
  }

  try {
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&id=${id}`)

    if (!response.ok) {
      throw new Error('Failed to fetch news article')
    }

    const data = await response.json()
    return data.results[0] || null
  } catch (error) {
    console.error('Failed to fetch news article:', error)
    return null
  }
}

