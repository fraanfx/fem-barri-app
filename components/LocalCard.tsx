'use client'

import "@/styles/globals.css";
import { useRouter } from "next/navigation";

interface LocalCardProps {
    id: string,
    name: string,
    type: string,
    desc: string;
    web: string;
    tags: [string];
}

const LocalCard = ( { id, name, type, desc, tags}: LocalCardProps) => {
    const router = useRouter();
    const navigatePage = () => {
        console.log('click')
        router.push(`/local/${id}`)
    }

    return (
  
        <div key={id} className={`local-card ${type}`}onClick={navigatePage}>
            <div className="card-title">
                <h3>{type} {name}</h3>
            </div>
            <div className="bg-image"></div>
            <div className={`card-body-${type}`}>
                
                <p>{desc}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <div key={index} style={{"display":"inline-block"}} className="tag">
                            <h6>&#10003;    {tag}</h6>
                        </div>
                    ))}
                </div>

                
            </div>

        </div>
  
  )
}

export default LocalCard