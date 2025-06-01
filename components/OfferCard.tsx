'use client'
import React from 'react'
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface OfferCardProps {
    id: string,
    name: string,
    image: string,
    description: string;
    local: string;
    price: number;
    discount: number;
    cupon: string;
    date: {
        day: string,
        month: string,
        year: string
    };
}


const OfferCard = ({
   id,  name, image, description, price, discount, date
}: OfferCardProps) => {
    const router = useRouter();

    const handleOfferClick = () => {
        console.log(name);
        router.push(`/offer/${id}`);
      };
  return (
    
    <div className='offer-container' onClick={handleOfferClick}>
        <div className="offer-content">
            <div className="offer-row">
                <Image className='offer-image' width={80} height={80} src={image} alt={name} />
                <div className="offer-text">
                    <h3 className='offer--title'>{name}</h3>
                    <p className=''>{description}</p>

                </div>
                <div className="price-box">
                    {discount ?
                    <div className='price-container'>
                        <span className='price red'>{`${price}€`}</span>
                        <span className='price discount'>{`${discount}€`}</span>
                    </div>
                    :
                    <span className='price green'>{price}€</span>}
                </div>
            </div>   
            <div className="offer-row">
            </div> 
            


            <div className="offer-row text-center distribute">
                <span className='card-expire-date'>&#128337; Expira el próximo {date.day} de {date.month} de {date.year}</span>
                {/*  <span className='primary-button-visual item-button'>Ver cupón</span> */}
            </div>
            </div>
    </div>
    
  )
}

export default OfferCard