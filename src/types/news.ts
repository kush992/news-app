export interface NewsArticle {
  article_id: string
  title: string
  link: string
  description: string
  content: string
  pubDate: string
  image_url: string | null
  source_id: string
  source_url: string
  source_icon: string | null
  category: string[]
  country: string[]
  language: string
  creator?: string
  sentiment?: string
  video_url?: string
  
}

export interface NewsResponse {
  status: string
  totalResults: number
  results: NewsArticle[]
  nextPage: string | null
}

export type Category = 'business' | 'entertainment' | 'environment' | 'food' | 'health' | 'politics' | 'science' | 'sports' | 'technology' | 'top' | 'world'

