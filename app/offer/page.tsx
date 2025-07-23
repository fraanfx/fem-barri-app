import { fetchOffers } from "@/lib/api/offers";
// import { fetchOffers } from "@/utils/fetchHooks";
import OffersPageClient from "@/components/clients/OffersPageClient";


export default async function OffersPage() {

  const serverOffers = await fetchOffers();

 return <OffersPageClient initialOffers={serverOffers} />;
}