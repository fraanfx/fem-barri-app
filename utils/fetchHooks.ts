"use server"
import {Offer, Local} from '@/types/index'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Fetch all locals

export async function fetchLocals(): Promise<Local[]> {
    const res = await fetch(`${API_URL}/locals`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error('Failed to fetch locals');
    }
    return res.json();
  }



// Fetch all offers
export async function fetchOffers(): Promise<Offer[]> {
    const res = await fetch(`${API_URL}/offers`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error('Failed to fetch offers');
    }
    
    return res.json();
  }



  export async function fetchOffer(id: string): Promise<Offer> {
    const res = await fetch(`${API_URL}/offers/${id}`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error('Failed to fetch offer');
    }
    
    return res.json();
  }

  export async function fetchLocal(id: string): Promise<Local> {
    const res = await fetch(`${API_URL}/locals/${id}`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error('Failed to fetch local');
    }
    
    return res.json();
  }

  export async function fetchLocalOffers(id: string): Promise<Local> {
    const res = await fetch(`${API_URL}/locals/${id}/local-offers`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error('Failed to fetch local offers');
    }
    
    return res.json();
  }

  export async function fetchOfferLocal(id: string): Promise<Local> {
    const res = await fetch(`${API_URL}/offers/${id}/offer-local`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error('Failed to fetch offers from local');
    }
    
    return res.json();
  }
  