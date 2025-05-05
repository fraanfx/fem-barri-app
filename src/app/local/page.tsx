import { fetchLocals } from "@/utils/fetchHooks";
import LocalsPageClient from "./LocalsPageClient";


export default async function LocalPage() {
  const serverLocals = await fetchLocals();

  // Pass the server-fetched data to the client component
 return <LocalsPageClient initialLocals={serverLocals}/>
}