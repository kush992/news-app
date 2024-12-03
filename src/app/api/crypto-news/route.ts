import { NextResponse } from 'next/server'

export async function GET() {
  const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY

  if (!NEWSDATA_API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(
      `https://newsdata.io/api/1/crypto?apikey=${NEWSDATA_API_KEY}&language=en`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch crypto news')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
	console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch crypto news' },
      { status: 500 }
    )
  }
}

