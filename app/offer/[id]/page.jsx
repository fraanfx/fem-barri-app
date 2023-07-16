'use client'

import { useEffect, useState} from "react";
import { searchParams, useSearchParams } from 'next/navigation';
import { useParams } from "next/navigation";
import Link from "next/link";
import OfferCard from '@/components/OfferCard';
import OffersFeed from "@/components/OffersFeed";
import PrintSpecs from "@/components/PrintSpecs";


import {data} from "@/data/data"
import InfoOffer from "@/components/InfoOffer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import {
    faAngleLeft, faAngleRight
  } from "@fortawesome/free-solid-svg-icons";



const OfferPage = ({ params }) => {
   //const searchParams = useSearchParams();
    const { offerId } = params;
    const queryParams = useParams();
    const href = window.location.href;
    const paramsOffer = data.offers.filter((offer) => offer.id == queryParams.id)[0];
    console.log(paramsOffer)
    const paramsOfferLocal = data.locals.filter((local)=> local.name.toLowerCase().includes(paramsOffer.local.toLowerCase()));
    const [selectedOffer, setSelectedOffer] = useState({});
    console.log("[Local]",paramsOfferLocal)
    console.log("[Local-0]",paramsOfferLocal[0].id)
    console.log(href)
    return(
        <div> 
            <div className="breadcrumb-container">
                <Link href="/" className="breadcrumb">
                    <FontAwesomeIcon className="breadcrumb-icon" icon={faAngleLeft} style={{marginRight : "6px"}} /> <p>Volver al inicio</p>      
                </Link> 
                
                {/* <Link href={`/local/${paramsOfferLocal[0].id}`} className="breadcrumb">
                    <FontAwesomeIcon className="breadcrumb-icon" icon={faAngleLeft} style={{marginRight : "6px"}} />

             <p> Volver a {paramsOfferLocal[0].type+' '+ paramsOfferLocal[0].name} </p>
                </Link> */}
            </div>
            {/* <OffersFeed /> */}
            <h6 className="local--page__type">{paramsOfferLocal[0].type}</h6>
            <h2 className="local--page__local-name">{paramsOfferLocal[0].name}</h2>
           
            <div className="offer-container">
                <div className="offer-content">
                    <div className="offer-image-container">
                          <img src={paramsOffer.imageUrl} width={300} height={300} alt="" className="offer-image" />
                    </div>
                        <h3 className="offer--title">{paramsOffer.name}</h3>
                    <div className="offer-description">
                        {/* {paramsOffer.name} */}
                        <p className="mb-10">Last price <span className='price red'>{paramsOffer.price}</span></p>
                        
                        <p className="mb-10">Offer price <span className='price discount'>{paramsOffer.discountPrice}</span></p>
                        <p className="mb-10">{paramsOffer.resumeInfo}</p>
                    </div>
                    <div className="expire-date">
                              <p>&#128337; Expira el próximo {paramsOffer.expireDate.day} de {paramsOffer.expireDate.month} de {paramsOffer.expireDate.year}</p> 
                    </div>
                </div>
            </div>

            <div className="" style={{display: "flex", flexFlow: "column nowrap"}}>
                <h3 className="mb-10">Descripción de la oferta</h3>
                <p>{paramsOffer.description}</p>
            </div>
                {
                    paramsOffer.specs && 
                    
                   <PrintSpecs title="Condiciones de la oferta" specs={paramsOffer.specs}/>
                } 
            

            <h3 style={{marginTop : "20px"}}>Cúpon para mostrar en tienda</h3>
            <div className="offer-container">
                <h2 style={{'textAlign': 'center'}}>{paramsOffer.cupon}</h2>
            </div>
            <div className="container-button-fw">
            <Link href={`/local/${paramsOfferLocal[0].id}`} className="primary-button-visual newsletter text-center">
                    Ver   {paramsOfferLocal[0].name}
                </Link>
            </div>
                <InfoOffer />
            
            <OffersFeed  title={"Otras ofertas"} data={data.offers}/>
            <div className="container-button-fw">
                <Link href={`/offer/`} className="primary-button-visual newsletter text-center">
                    Volver a ofertas
                </Link>
            </div>
        </div>
    )
}
export default OfferPage;