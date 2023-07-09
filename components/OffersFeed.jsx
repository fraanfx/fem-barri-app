import React from 'react'
//import {data} from "@/data/data"
import OfferCard from './OfferCard';



const OffersFeed = ({title, data}) => {
  const offers = data;
  return (
    <div>
      <h4 className='feed-title'>{title}</h4>
      <div className="feed-container">
      {offers.map((offer) => {
        return (
          <OfferCard 
          key={offer.id}
          id={offer.id}
          name={offer.name}
          image={offer.imageUrl}
          description={offer.resumeInfo}
          local={offer.local}
          price={offer.price}
          discount={offer.discountPrice}
          cupon={offer.cupon}
          date={offer.expireDate}
          />
          )
        })}
        </div> 
    
    </div>
  )
}

export default OffersFeed