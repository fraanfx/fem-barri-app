import "@/styles/globals.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 


import Header from "@/components/Header";

import Footer from "@/components/Footer";
import { Montserrat } from '@next/font/google'




import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

const montserratFont = Montserrat({
  subsets:['latin']
})
export const metadata = {
  title: "FemBarri",
  description: "Descubre nuevos sitios en bcn",
};

const RootLayout = ({ children }) => (
  <html lang='es'>
    <body className={montserratFont.className}>
        <main className={`app`}>
            <Header />
          {children}
        </main>
            <Footer />
    </body>
  </html>
);

export default RootLayout;