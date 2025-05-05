import { fetchOffers } from "@/utils/fetchHooks";
import OffersPageClient from "./OffersPageClient";


// This is a Server Component that fetches the data
export default async function OffersPage() {
  // Fetch data on the server
  const serverOffers = await fetchOffers();
  
  
  // Pass the server-fetched data to the client component
 return <OffersPageClient initialOffers={serverOffers} />;
}