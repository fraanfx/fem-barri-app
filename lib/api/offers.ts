import { promises as fs } from 'fs';
import path from 'path';
import { Offer, Local } from '@/types';


export async function fetchOffers(): Promise<Offer[]> {
  const filePath = path.join(process.cwd(), 'mocks', 'data.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  return data.offers as Offer[];
}

export async function fetchOffer(id: string): Promise<Offer> {
  const filePath = path.join(process.cwd(), 'mocks', 'data.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  const offer = data.offers.find((offer: Offer) => offer.id === id);

  if (!offer) {
    throw new Error(`Offer with ID ${id} not found`);
  }

  return offer;
}

export async function fetchOfferLocal(id: string): Promise<Local> {
  const filePath = path.join(process.cwd(), 'mocks', 'data.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  const offer = data.offers.find((offer: Offer) => offer.id === id);
  if (!offer) {
    throw new Error(`Offer with ID ${id} not found`);
  }

  const local = data.locals.find((local: Local) =>
    offer.local.toLowerCase().includes(local.name.toLowerCase())
  );
  
   if (!local) {
    throw new Error(`Local for Offer ID ${id} not found`);
  }

  return local;
}
