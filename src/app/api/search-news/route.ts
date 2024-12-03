import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY

  if (!NEWSDATA_API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    )
  }

  if (!query) {
    return NextResponse.json(
      { error: 'Search query is required' },
      { status: 400 }
    )
  }

  try {
    const response = await fetch(
      `https://newsdata.io/api/1/archive?apikey=${NEWSDATA_API_KEY}&q=${encodeURIComponent(query)}&language=en`
    )

    if (!response.ok) {
      throw new Error('Failed to search news')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
	console.error(error)
    return NextResponse.json(
      { error: 'Failed to search news' },
      { status: 500 }
    )
  }
}

