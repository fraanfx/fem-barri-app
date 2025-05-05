import { NextResponse } from 'next/server';
import data from '../../../mocks/data.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const local =  data.locals.find(local => local.id === id);

  if (!local) {
    return NextResponse.json({ error: 'Local not found' }, { status: 404 });
  }

  const offers = data.offers.filter((offer) => offer.local.toLowerCase().includes(local.name.toLowerCase()) )
  
  if (!offers || offers.length === 0) {
    return NextResponse.json(offers, {
      headers: {
        'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
      },     
  })
  }
  
  return NextResponse.json(offers, {
        headers: {
          'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
        },     
  });
}