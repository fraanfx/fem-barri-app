import { promises as fs } from 'fs';
import path from 'path';

import { Local, Offer } from '@/types';


export async function fetchLocals(): Promise<Local[]> {
  const filePath = path.join(process.cwd(), 'mocks', 'data.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  return data.locals;
}


export async function fetchLocal(id: string): Promise<Local> {
  const filePath = path.join(process.cwd(), 'mocks', 'data.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  const local = data.locals.find((local: Local) => local.id === id);

  if (!local) {
    throw new Error(`Local with id ${id} not found`);
  }

  return local;
}

export async function fetchLocalOffers(id: string): Promise<Offer[]> {
  const filePath = path.join(process.cwd(), 'mocks', 'data.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  const local: Local | undefined = data.locals.find((l: Local) => l.id === id);
  if (!local) {
    throw new Error(`Local with ID ${id} not found`);
  }

  const offers: Offer[] = data.offers.filter((offer: Offer) =>
    offer.local.toLowerCase().includes(local.name.toLowerCase())
  );

  return offers;
}


