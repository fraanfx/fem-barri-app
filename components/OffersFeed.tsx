import React from 'react'
//import {data} from "@/data/data"
import OfferCard from './OfferCard';
import {Offer} from '@/types/offer'

interface OffersFeedProps {
  title: string,
  data: [
    Offer
  ]
}


const OffersFeed = ({ title, data}: OffersFeedProps ) => {
  const offers = data;
  return (
    <div>
      <h4 className='feed-title'>{title}</h4>
      <div className="feed-container">
      {offers.map((offer: Offer) => {
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