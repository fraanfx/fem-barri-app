import IconSocial from "@/components/IconSocial";
const Social = ({links}) => {
    
   
    console.log("[socialInner]",links)
  return (
   <div className="social-container">
                    {/* {links.forEach((link, index) => (
                       <IconSocial key={index} type={link.Object.keys()} link={link}/>
                   ))}     */}
                   {
                    Object.entries(links).map(([key, value], idx) =>
                     (
                      <IconSocial key={idx} type={key} link={value}/>
                    
                     )
                    )
                   }  
                  
                  
                   

    </div>
  )
}
                


export default Social;