import OffersFeed from "@/components/OffersFeed";
import LocalsFeed from "@/components/LocalsFeed";

import {data} from "@/data/data"

import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import ViewMore from "@/components/ViewMore";


export default function Home() {

  
  return (
    <section className=''>
   

    <OffersFeed title={"Ofertas destacadas"} data={data.offers.filter((offer)=>offer.premium).slice(0,9)}/>
    {/* ver mas */}
    <ViewMore linkUrl={`/offer/`} descTitle={`Ver más`} />
    <LocalsFeed title={"Locales cercanos"} data={data.locals}/>
    {/* ver mas */}
    <ViewMore linkUrl={`/local/`} descTitle={`Ver más`} />
    <Newsletter />
    

    </section>
  );
}
