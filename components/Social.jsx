import IconSocial from "./iconSocial";
const Social = ({links}) => {
    
   
    console.log("[socialInner]",links)
  return (
   <div className="social-container">
        

              {
                    Object.entries(links).map(([key, value], idx) =>
                     (

                      <IconSocial type={key} link={value} />

                     )
                    )
                     }
                  
                  
                  
                   

    </div>
  )
}
                


export default Social;