import { fetchLocal, fetchLocalOffers } from "@/utils/fetchHooks";
import LocalPageClient from "./LocalPageClient";


// This is a Server Component that fetches the data
export default async function LocalPage({ params } : {params:{id: string}}) {
  // Fetch data on the server
  const { id } = await params;
  const [local, fetchedOffers] = await Promise.all([
    fetchLocal(id),
    fetchLocalOffers(id)
  ]);

    // Asegurarse de que offers sea un array
    const offers = Array.isArray(fetchedOffers) ? fetchedOffers : [fetchedOffers];
  const offersO = Object.assign({}, offers); 
    // Verificar los tipos antes de pasarlos
    console.log('Local type:', typeof(local), 'Is array?', Array.isArray(local));
    console.log('Offers type:', typeof(offers), 'Is array?', Array.isArray(offers));

 // const serverOffers = await fetchLocal(params.id);
  
  //console.log(serverOffers)
  // Pass the server-fetched data to the client component
    return <LocalPageClient local={local} offers={offers} />;
}