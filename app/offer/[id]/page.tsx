// import {  fetchOffer, fetchOfferLocal, fetchOffers } from "@/utils/fetchHooks";
import {  fetchOffer, fetchOfferLocal, fetchOffers } from "@/lib/api/offers";
import OfferPageClient from "@/components/clients/OfferPageClient";
import { notFound } from "next/navigation";

interface PageProps{
   params: Promise<{ id: string }>;
 }
 

   // This is a Server Component that fetches the data
export default async function OfferPage({ params } : PageProps) {
    // Fetch data on the server
    const { id } = await params;

    try{
      const [offer, offers, local] = await Promise.all([
         fetchOffer(id),
         fetchOffers(),
         fetchOfferLocal(id)
      ]);
      // Pass the server-fetched data to the client component
         return <OfferPageClient offer={offer} offers={offers} local={local}/>;
    }
    catch(error)
    {
      console.error(error);
       return notFound();
    }
  } 
