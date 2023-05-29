import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Dropdown from './assets/componets/Dropdown'
import Header from  './assets/componets/Header'
import Hero from './assets/componets/Hero'
import Destinations from './assets/componets/Destinations'
import Packages from './assets/componets/Packages'
import Testimonials from './assets/componets/Testimonials'
import Contact from './assets/componets/Contact'
import Footer from './assets/componets/Footer'

export function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
     <Header/>
     <Hero/>
     <Destinations/>
     <Packages/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
 

      

  

}





