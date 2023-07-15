
const Social = ({links}) => {
    
   
    console.log("[socialInner]",links)
  return (
   <div className="social-container">
        

              {
                    Object.entries(links).map(([key, value], idx) =>
                     (
                    <p>IconSocial key={idx} type={key} link={value}</p>  
                    
                     )
                    )
                     }
                  
                  
                  
                   

    </div>
  )
}
                


export default Social;