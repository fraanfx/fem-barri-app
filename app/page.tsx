import OffersFeed from "@/components/OffersFeed";
import LocalsFeed from "@/components/LocalsFeed";

//import { fetchOffers, fetchLocals } from "@/utils/fetchHooks";
import { fetchLocals, fetchOffers } from '@/lib/api';

import Newsletter from "@/components/Newsletter";
import ViewMore from "@/components/ViewMore";

  // Parallel data fetching for better performance
const [offers, locals] = await Promise.all([
  fetchOffers(),
  fetchLocals(),
]);

export default async function Home() {
 
  return (
    <section className=''>
   

    <OffersFeed title={"Ofertas destacadas"} data={offers.filter((offer)=>offer.premium).slice(0,9)}/>
    {/* ver mas */}
    <ViewMore linkUrl={`/offer/`} descTitle={`Ver más`} />
    <LocalsFeed title={"Locales cercanos"} data={locals}/>
    {/* ver mas */}
    <ViewMore linkUrl={`/local/`} descTitle={`Ver más`} />
    <Newsletter />
    

    </section>
  );
}
