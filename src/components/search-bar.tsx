'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { NewsResponse } from '@/types/news'
import { NewsCard } from './news-card'
import { NewsSkeletonGrid } from './news-skeleton'
import { Input } from './ui/input'
import { Button } from './ui/button'

async function searchNews(query: string): Promise<NewsResponse> {
  const response = await fetch(`/api/search-news?q=${encodeURIComponent(query)}`)
  if (!response.ok) {
    throw new Error('Failed to search news')
  }
  return response.json()
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search-news', searchTerm],
    queryFn: () => searchNews(searchTerm),
    enabled: !!searchTerm,
    staleTime: 5 * 60 * 1000,
    // cacheTime: 10 * 60 * 1000,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchTerm(query)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news..."
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      {isLoading && <NewsSkeletonGrid />}
      {isError && <div>Error searching news</div>}
      {data && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.results.map((article) => (
            <NewsCard key={article.article_id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}

