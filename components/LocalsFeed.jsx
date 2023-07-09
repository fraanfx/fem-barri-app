
//import {data} from "@/data/data"
import LocalCard from './LocalCard';

// const fetchLocals = () => {
//   return fetch('')
//     .then(res => res.json())
// }


const LocalsFeed = ({data}) => {
  console.log(data);
  //const locals = data.locals;
  return (
    <div>
      <h4 className='feed-title'>Locales cercanos</h4>
      <div className="feed-container">
      {data.map((local, index) => {
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