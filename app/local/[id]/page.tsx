import { fetchLocal, fetchLocalOffers } from "@/lib/api";
//import { fetchLocal, fetchLocalOffers } from "@/utils/fetchHooks";
import LocalPageClient from "@/components/clients/LocalPageClient";
import { notFound } from "next/navigation";

interface PageProps{
   params: Promise<{ id: string }>;
 }
export default async function LocalPage({ params } : PageProps) {
  const { id } = await  params;
  try{
    const [local, fetchedOffers] = await Promise.all([
      fetchLocal(id),
      fetchLocalOffers(id)
    ]);
 

    // Asegurarse de que offers sea un array
    const offers = fetchedOffers;
  //const offersO = Object.assign({}, offers); 
 // const serverOffers = await fetchLocal(params.id);
  
  // Pass the server-fetched data to the client component
  return <LocalPageClient local={local} offers={offers} />;
  }
  catch (error) {
    console.error(error);
    return notFound()
  }
}