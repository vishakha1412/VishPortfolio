 import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Outlet } from 'react-router';
import  Header  from './components/Header/Header';
AOS.init();

function App() {
 

  return (
     <>
    
     <Header/>
     <Outlet/>
     </>
  )
}

export default App
