'use client';
import { Offer, Local } from "@/types";
import  OffersFeed from '@/components/OffersFeed' 
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import InfoOffer from "@/components/InfoOffer";
import PrintSpecs from "@/components/PrintSpecs";

interface OfferPageClientProps {
    offer: Offer;
    offers: Offer[];
    local: Local;
}




const OfferPageClient = ({offer, offers, local
}: OfferPageClientProps) => { 

    const localObj:Local =  local;

    if (!offer) {
        return <p>Oferta no encontrada.</p>
      }
  return(
    <div>
            <Breadcrumb linkUrl={"/"} descTitle="Volver al inicio" />

             {/* <OffersFeed /> */}
                        <h6 className="local--page__type">{localObj.type}</h6>
                        <h2 className="local--page__local-name">{localObj.name}</h2>
                       <div className="local--offer mb-60">
                        <div className="offer-container-card">
                            <div className="offer-container">
                                <div className="offer-content">
                                    <div className="offer-image-container">
                                        <Image src={offer.imageUrl} width={300} height={300} alt="" className="offer-image" />
                                    </div>
                                        <h3 className="offer--title">{offer.name}</h3>
                                    <div className="offer-description">
                                        {/* {offer.name} */}
                                        <p className="mt-10 mb-10">Last price: <span className='price red'>{offer.price}€</span></p>
                                        
                                        <p className="mb-10">Offer price: <span className='price discount'>{offer.discountPrice}€</span></p>
                                        <p className="mb-10">{offer.resumeInfo}</p>
                                    </div>
                                    <div className="expire-date">
                                            <p>&#128337; Expira el próximo {offer.expireDate.day} de {offer.expireDate.month} de {offer.expireDate.year}</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
            <div className="offer-specs" >
            <div className="" style={{display: "flex", flexFlow: "column nowrap"}}>
                <h3 className="mb-10">Detalles de la oferta</h3>
                <p>{offer.description}</p>
            </div>
                {
                    offer.specs && 
                    
                   <PrintSpecs title="Condiciones de la oferta" specs={offer.specs}/>
                } 
            <div className="specs-extra">
                <div className="cupon-group">
                    <h3 style={{marginTop : "20px"}}>Cúpon para mostrar en tienda</h3>
                    <div className="offer-container">
                        <h2 className="cupon">{offer.cupon}</h2>
                    </div>
                </div>
                <div className="container-button-fw">
                <Link href={`/local/${localObj.id}`} className="primary-button-visual newsletter text-center">
                        Ver   {localObj.name}
                    </Link>
                </div>
                    <InfoOffer />
                </div>
            </div>
            </div>
            <OffersFeed  title={"Otras ofertas"} data={offers}/>
            <div className="container-button-fw">
                <Link href={`/offer/`} className="primary-button-visual newsletter text-center">
                    Volver a ofertas
                </Link>
            </div> 

    </div>
    
  )

}
export default OfferPageClient;