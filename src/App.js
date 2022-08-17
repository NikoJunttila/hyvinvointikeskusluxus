import * as React from 'react';
import HeaderDeskTop from "./components/Header"
import Sider from "./components/Sider"
import Etusivu from "./components/Etusivu"
import Footer from "./components/Footer"
import Hyvinvointi from "./components/HyvinvointiPalvelut"
import Nettiajanvaraus from "./components/Nettiajanvaraus"
import EAH from "./components/Eah-koulutus"
import Hinnasto from "./components/Hinnasto"
import Yhteystiedot from "./components/Yhteystiedot"
import Tapahtumat from "./components/Tapahtumat"
import CV from "./components/CV"
import Kauppa from './components/Kauppa'
import Galleria from './components/Gallery';
import Tietosuoja from './components/Tietosuoja';
import {
   BrowserRouter as Router,
   Routes, Route
 } from "react-router-dom"

function App(){
    return(
      <Router>
         <HeaderDeskTop />
        <div className="container">
            <div className="main">
               <Routes>
              <Route path="/" element={<Etusivu />}  />
              <Route path="hyvinvointipalvelut" element={<Hyvinvointi />}  />
              <Route path="nettiajanvaraus" element={<Nettiajanvaraus />}  />
              <Route path="eah" element={<EAH />}  />
              <Route path="hinnasto" element={<Hinnasto />}  />
              <Route path="yhteystiedot" element={<Yhteystiedot />}  />
              <Route path="tapahtumat" element={<Tapahtumat />}  />
              <Route path="susanna" element={<CV />}  />
              <Route path="kauppa" element={<Kauppa />}  />
              <Route path="galleria" element={<Galleria />}  />
              <Route path="tietosuojaseloste" element={<Tietosuoja />}  />
              </Routes>


            </div>
            <Sider></Sider>
            <Footer></Footer>
        </div>
</Router>
    )
}

export default App