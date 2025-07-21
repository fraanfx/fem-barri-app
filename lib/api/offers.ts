import { Offer, Local } from '@/types';
import { getBaseUrl } from './baseUrl';


export async function fetchOffers(): Promise<Offer[]> {
  const res = await fetch(`${getBaseUrl()}/api/offers`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch offers');
  return res.json();
}

export async function fetchOffer(id: string): Promise<Offer> {
  const res = await fetch(`${getBaseUrl()}/api/offers/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch offer');
  return res.json();
}

export async function fetchOfferLocal(id: string): Promise<Local> {
  const res = await fetch(`${getBaseUrl()}/api/offers/${id}/offer-local`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch offer local');
  const data = await res.json();
  return data[0];
}
