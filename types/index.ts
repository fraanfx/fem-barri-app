export interface Offer {
    id: string,
    name: string,
    imageUrl: string,
    description: string,
    resumeInfo: string,
    specs:[string],
    category: string,
    conditions: string,
    local: string,
    cupon: string,
    premium: boolean,
    price: number,
    discountPrice: number,
    expireDate: {
        day: string,
        month: string,
        year: string,
    }
}

export interface Local {
    id: string,
    name: string,
    type: string,
    address: string,
    imageLocation: string,
    geoPosition: {
        lat: number,
        lng: number,
    }
    urlLocation: string,
    description: string;
    shortResume: string
    web: string;
    tags: [string];
    offers?: [object],
    workTime: [string],
    social? : object
}

interface SocialLinks {
    [key: string]: string;
  }
  