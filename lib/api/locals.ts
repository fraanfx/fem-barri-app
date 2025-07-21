import { Local } from '@/types';
import { Offer } from '@/types';

import { getBaseUrl } from './baseUrl';

export async function fetchLocals(): Promise<Local[]> {
  const res = await fetch(`${getBaseUrl()}/api/locals`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch locals');
  return res.json();
}

export async function fetchLocal(id: string): Promise<Local> {
  const res = await fetch(`${getBaseUrl()}/api/locals/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch local');
  return res.json();
}

export async function fetchLocalOffers(id: string): Promise<Offer[]> {
  const res = await fetch(`${getBaseUrl()}/api/locals/${id}/local-offers`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch local offers');
  return res.json();
}
