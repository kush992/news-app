import { NextRequest, NextResponse } from 'next/server'
import { Category } from '@/types/news'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get('category') as Category || 'top'
  const country = searchParams.get('country') || 'us'

  const NEWSDATA_API_KEY = "pub_61105200a75b2679c2344a0929c58c37c8389"

  if (!NEWSDATA_API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    )
  }

  try {
    const url = `https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&country=${country}&language=en&category=${category}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Failed to fetch news')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Failed to fetch news:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    )
  }
}

