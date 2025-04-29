
//import {data} from "@/data/data"
import LocalCard from './LocalCard';
import { Local } from '@/types';

// const fetchLocals = () => {
//   return fetch('')
//     .then(res => res.json())
// }


interface LocalsFeedProps {
  title: string,
  data: 
    Local[]
}

const LocalsFeed = ({data}: LocalsFeedProps) => {
  console.log(data);
  //const locals = data.locals;
  return (
    <div>
      <h4 className='feed-title'>Locales cercanos</h4>
      <div className="feed-container">
      {data.map((local: any, index: number) => {
        return (
          <LocalCard 
            key={local.id}
            id={local.id} 
            name={local.name} 
            type={local.type} 
            desc={local.shortResume}
            web={local?.web}
            tags={local.tags}
          />
        )
      })}
      </div>
    </div>
  )
}

export default LocalsFeed