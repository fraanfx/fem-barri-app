'use client'

import "@/styles/globals.css";
import { useKeyboardClick } from "@/utils/pressKeyHooks";
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
        router.push(`/local/${id}`)
    }

    const onKeyDown = useKeyboardClick({ onEnterOrSpace: navigatePage });
    

    return (
  
        <div key={id} aria-description={`Card for ${name}`} aria-roledescription="Local card" className={`local-card ${type}`} tabIndex={0} onClick={navigatePage}  onKeyDown={onKeyDown}>
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