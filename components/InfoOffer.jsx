import {useState} from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faCopy,
  faCheck,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";


const InfoOffer = () => {
   // const href = window.location.href;
  const [copied, setCopied] = useState('');
  const [isCopied, setIsCopied] = useState('false')
  const handleCopy = () => {
      setCopied(window.location.href);
      navigator.clipboard.writeText(window.location.href);
      setIsCopied("true");
    console.log('copied');
      setTimeout(() => setCopied(""), 3000);
      setTimeout(() => setIsCopied("false"), 3000);
  }

  return (
    <div className='copy-container'>
      <div className="copy-text-container">
      <FontAwesomeIcon
        icon={faShareNodes}
        style={{ fontSize: 26, color: "#fff", marginRight: "9px" }}
      /> <h2 className='mb-10'>Comparteme!</h2>
      </div>
      
       <span className={`cta-copy ${isCopied} `} onClick={handleCopy} style={{"textAlign":"center"}}>
       <FontAwesomeIcon
        icon={isCopied === "true" ? faCheck : faCopy }
        style={{ fontSize: 26, color: "#fff", marginRight: "9px" }}
      />
        {isCopied === "true" ? "Enlace copiado" : 'Copia el enlace'}
       </span>
  {/* <Image 
    src={copied === post.prompt 
      ? './assets/icons/tick.svg'
      : './assets/icons/copy.svg'
    }
    width={20}
    height={20}
  /> */}
  </div>
  )
}

export default InfoOffer