import React from 'react'
//import {data} from "@/data/data"
import OfferCard from './OfferCard';
import LocalCard from './LocalCard';



const Feed = ({title, data, typeComponent}) => {
  const offers = data;
  return (
    <div>
      <h4 className='feed-title'>{title}</h4>
     ´{typeComponent === 'offer' ?  
      offers.offers.map((offer) =>
       
           
          <OfferCard 
              key={offer.id}
              id={offer.id}
              name={offer.name}
              image={offer.imageUrl}
              description={offer.description}
              local={offer.local}
              price={offer.price}
              discount={offer.discountPrice}
              cupon={offer.cupon}
              date={offer.expireDate}
          />) :
          offers.locals.map((local) =>
          
          <LocalCard 
          id={local.id} 
          name={local.name} 
          type={local.type} 
          desc={local.description}
          web={local?.web}
          tags={local.tags}
        />
          )
  }
    </div>
  )
}

export default Feed;