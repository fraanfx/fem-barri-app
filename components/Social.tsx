import IconSocial from "./iconSocial";
interface SocialProps {
  links:{
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  pinterestUrl?: string;
  linkedinUrl?: string;
  tiktokUrl?: string;
  }
}

const Social = (links: SocialProps ) => {
    
   
    console.log("[socialInner]",links)
  return (
   <div className="social-container">
        

              {
                    Object.entries(links).map(([key, value], idx) =>
                     (

                      <IconSocial  key={idx} type={key} link={value} />

                     )
                    )
                     }
                  
                  
                  
                   

    </div>
  )
}
                


export default Social;