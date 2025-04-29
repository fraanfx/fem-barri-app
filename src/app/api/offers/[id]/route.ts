import { NextResponse } from 'next/server';
import data from '../../mocks/data.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const offer = data.offers.find(offer => offer.id === params.id);
  
  if (!offer) {
    return NextResponse.json({ error: 'Offer not found' }, { status: 404 });
  }
  
  return NextResponse.json(offer, {
    headers: {
      'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
    },
  });
}
