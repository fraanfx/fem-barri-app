import { fetchLocals } from "@/lib/api/locals";
// import { fetchLocals } from "@/utils/fetchHooks";
import LocalsPageClient from "@/components/clients/LocalsPageClient";


export default async function LocalPage() {
  const serverLocals = await fetchLocals();

  // Pass the server-fetched data to the client component
 return <LocalsPageClient initialLocals={serverLocals}/>
}