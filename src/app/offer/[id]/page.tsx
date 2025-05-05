import {  fetchOffer, fetchOfferLocal, fetchOffers } from "@/utils/fetchHooks";
import OfferPageClient from "./OfferPageClient";
import { Local } from "@/types";

   // This is a Server Component that fetches the data
export default async function OfferPage({ params } : {params:{id: string}}) {
    // Fetch data on the server
    const { id } = await params;
    console.log((id))
    const [offer, offers, local] = await Promise.all([
       fetchOffer(id),
       fetchOffers(),
       fetchOfferLocal(id)
    ]);
    //console.log(serverOffers)
    // Pass the server-fetched data to the client component
      return <OfferPageClient offer={offer} offers={offers} local={local}/>;
  } 
