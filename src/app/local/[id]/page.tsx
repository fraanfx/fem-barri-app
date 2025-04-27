"use client"
import { useParams, useSearchParams } from 'next/navigation';
import Link from "next/link";
import OfferCard from '@/components/OfferCard';
import OffersFeed from "@/components/OffersFeed";
import {data} from "@/data/data"
import InfoOffer from "@/components/InfoOffer";
import Social from "@/components/Social";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from "@/components/Map";
// import the icons you need
import {
    faAngleLeft,
    faArrowUpRightFromSquare
  } from "@fortawesome/free-solid-svg-icons";




  interface GeoPosition {
    
    lat: number;
    lng: number;
    
  }
  
  interface SocialLinks {
    [key: string]: string;
  }
  
  interface Local {
    id: string;
    name: string;
    type: string;
    shortResume: string;
    tags: string[];
    description: string;
    address: string;
    geoPosition: GeoPosition;
    urlLocation: string;
    workTime: string[];
    web?: string;
    social?: SocialLinks;
    imageLocation?: string;
  }
  
  interface Offer {
    id: string;
    local: string;
    // Add other offer properties as needed
  }
  
  interface LocalPageProps {
    params: {
      id: string;
    };
  }





  const LocalPage: React.FC<LocalPageProps> = ({ params }) => {
    const queryParams = useParams();
    const searchParams = useSearchParams();
    //  const href = window.location.href;
    const local = data.locals.filter((local) => local.id == queryParams.id)[0];
    const localOffers = data.offers.filter((offer) => offer.local.toLowerCase().includes(local.name.toLowerCase()) )
    
    console.log(local)

    return(
        <div>
         {/* //Breadcrumb */}
         
            <Link href="/" className="breadcrumb">
            <FontAwesomeIcon className="breadcrumb-icon" icon={faAngleLeft} style={{marginRight : "6px"}} /> 
            <p>Volver al inicio</p> 
            </Link>
         {/* //title */}
            <p className="citated-type">{local.type}</p>
            <h2 >{local.name}</h2>
            <div className="container-h-flex">
            <div className={`local-card ${local.type} mb-50`} >
            <div className="card-title">
            </div>
            <div className="bg-image"></div>
            <div className={`card-body-${local.type}`}>
                {local.shortResume}
                <div className="tags">
                    {local.tags.map((tag, index) => (
                        <div key={index} style={{"display":"inline-block"}} className="tag">
                            <h6>&#10003;    {tag}</h6>
                        </div>
                    ))}
                </div>
            </div>

        </div>

                 
          {/* //Info */}
          <div className="container-info mb-50">
                    <h2 className="mb-10">Información</h2>
                    <p>{local.description}</p>
            </div>
    
         {/* //Donde estamos */}
         <div className="local-location__container mb-30">
            <h2 className="mb-10">Donde estamos?</h2>
            <p className="local-location mb-10">{local.address}</p>
           <div className="container--where">
            <Map geoPosition={local.geoPosition}/>
           {/* <img className='local-image' width="100%" height="auto" src={local.imageLocation} alt={local.shortResume} /> */}
           <div className="container-button-fw location">
           <a className="primary-button-visual newsletter " href={local.urlLocation}>Abrir en Google Maps</a>
           </div>

           </div>
           </div>
          <div className="page-low-info">
         {/* //Horario */}
         <div className="worktime-container mb-50">
            <h2 className="mb-10">Horario</h2>
            {
                local.workTime.map((worktime, index) => (
                    <p key={index}>{worktime} <br/></p> 
                    ))
                }
         </div>
        {/* Website? */}
            {local.web ? 
            <div className="website-container mb-50">
                <h2 className="mb-10">Sitio web</h2>
                <Link href={local.web} style={{color: "#fff", cursor: "pointer", display: "flex", alignItems: "center"}}> <FontAwesomeIcon className="breadcrumb-icon" icon={faArrowUpRightFromSquare} style={{marginRight : "6px"}} />  <p style={{margin : "0", fontSize: "20px"}}>{local.web} </p></Link>
            </div>
             
             : ''}
            {/* Comparte este local  */}
            <div className="copy-margin mb-50">
                <InfoOffer />
            </div>
            </div>
        </div>
        
         {/* //offersFeed */}
         <hr className="mb-50 op-0"/>
         { localOffers[0] !== undefined ?  <OffersFeed title={`Ofertas de ${local.name}`} data={localOffers}/> : <p style={{"color": "red", "marginBottom" : "20px"}}>No hay ofertas disponibles para este local</p>}
                
        {/* Social links*/}
        {
            local.social && <Social links={local.social}/>
        }
         {/* Locales parecidos filter type */}
        </div>
    )
}
export default LocalPage;