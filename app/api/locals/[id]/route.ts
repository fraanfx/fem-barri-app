import { NextRequest, NextResponse } from 'next/server';
import data from '@/mocks/data.json';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }>  }
) {
  const { id } = await params;
  const local = data.locals.find(local => local.id === id);
  
  if (!local) {
    return NextResponse.json({ error: 'Local not found' }, { status: 404 });
  }
  
  return NextResponse.json(local, {
        headers: {
          'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
        },     
  });
}