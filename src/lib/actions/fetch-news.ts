'use server'

import { Category, NewsResponse } from '@/types/news'

export async function fetchNews(category: Category = 'top') {
  const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY || 'pub_61105200a75b2679c2344a0929c58c37c8389'

  if (!NEWSDATA_API_KEY) {
    throw new Error('NEWSDATA_API_KEY is not defined')
  }

  const response = await fetch(
    `https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&country=us&language=en&category=${category}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch news')
  }

  const data: NewsResponse = await response.json()
  return data
}

