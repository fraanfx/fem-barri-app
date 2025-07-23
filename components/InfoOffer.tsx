import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faCopy,
  faCheck,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import { useKeyboardClick } from '@/utils/pressKeyHooks';


const InfoOffer = () => {
  const [isCopied, setIsCopied] = useState('false')
  const handleCopy = () => {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied("true");
      setTimeout(() => setIsCopied("false"), 3000);
  }

    const onKeyDown = useKeyboardClick({ onEnterOrSpace: handleCopy });


  return (
    <div className='copy-container'>
      <div className="copy-text-container">
      <FontAwesomeIcon
        icon={faShareNodes}
        style={{ fontSize: 26, color: "#fff", marginRight: "9px" }}
      /> <h2 className='mb-10'>Comparteme!</h2>
      </div>
      
       <span tabIndex={0} className={`cta-copy ${isCopied} `} aria-label="Copy to clipboard"
       onClick={handleCopy}
       onKeyDown={onKeyDown}

       
       style={{"textAlign":"center"}}>
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