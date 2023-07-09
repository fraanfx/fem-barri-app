import IconSocial from "./iconSocial";
const Social = (links) => {
    
   
    console.log("[socialInner]",links.links)
  return (
   <div className="social-container">
                    {links.links.map((link, index) => (
                       <IconSocial key={index} type={link[0]} link={link[1]}/>
                   ))}             
    </div>
  )
}
                


export default Social;