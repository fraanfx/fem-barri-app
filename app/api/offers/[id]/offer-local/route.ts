import { NextRequest, NextResponse } from 'next/server';
import data from '@/mocks/data.json';

export async function GET(
  request: NextRequest,
  { params }: {  params: Promise<{ id: string }> }
) {
   const {id} = await params;
   const offer= data.offers.find((offer)=> offer.id === id)
   
   if (!offer) {
    return NextResponse.json({ error: 'Offer requested not found' }, { status: 404 });
   }


   const offerName =  offer.local;


  const offerLocal =  data.locals.filter((local)=> local.name.toLowerCase().includes(offerName.toLowerCase()));


  if (!offerLocal) {
    return NextResponse.json({ error: 'Local not found' }, { status: 404 });
  }
  
  return NextResponse.json(offerLocal, {
        headers: {
          'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
        },     
  });
}

