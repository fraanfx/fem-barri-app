import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faCopy,
  faCheck,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";


const InfoOffer = () => {
  const [isCopied, setIsCopied] = useState('false')
  const handleCopy = () => {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied("true");
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
  </div>
  )
}

export default InfoOffer