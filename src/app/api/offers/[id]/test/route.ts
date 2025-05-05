import { NextResponse } from 'next/server';
import data from '../../../mocks/data.json';

export async function GET() {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
    },
  });
}