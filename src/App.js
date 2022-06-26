import * as React from 'react';
import { useState } from "react"
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
import HeaderMobile from './components/HeaderMobile'
import Kauppa from './components/Kauppa'
import Galleria from './components/Gallery';
import Tietosuoja from './components/Tietosuoja';

function App(){
    const [page,setPage] = useState(Etusivu)
    function onClickEtusivu(){
       setPage(Etusivu)
    }
    function onClickHyvinvointi(){
        setPage(Hyvinvointi)
     }
     function onClickNettiajanvaraus(){
        setPage(Nettiajanvaraus)
     }
     function onClickEAH(){
        setPage(EAH)
     }
     function onClickHinnasto(){
        setPage(Hinnasto)
     }
     function onClickYhteystiedot(){
        setPage(Yhteystiedot)
     }
     function onClickTapahtumat(){
        setPage(Tapahtumat)
     }
     function onClickCV(){
      setPage(CV)
   }
   function onClickKauppa(){
      setPage(Kauppa)
   }
   function onClickGalleria(){
      setPage(Galleria)
   }
   function onClickTietosuoja(){
      setPage(Tietosuoja)
   }


    return(
        <div className="container">
      {window.innerWidth > 1200 ?
            <HeaderDeskTop 
            site1={onClickEtusivu}
            site2={onClickNettiajanvaraus}
            site3={onClickHyvinvointi}
            site4={onClickTietosuoja}
            site5={onClickEAH}
            site6={onClickHinnasto}
            site7={onClickYhteystiedot}
            site8={onClickGalleria}
            site9={onClickTapahtumat}
            site10={onClickCV}
            site11={onClickKauppa}/> :
            <HeaderMobile     
            site1={onClickEtusivu}
            site2={onClickNettiajanvaraus}
            site3={onClickHyvinvointi}
            site5={onClickEAH}
            site6={onClickHinnasto}
            site7={onClickYhteystiedot}
            site8={onClickGalleria}
            site9={onClickTapahtumat}
            site10={onClickCV}
            site11={onClickKauppa}
            site4={onClickTietosuoja}
            />}
            <div className="main">
                {page}
            </div>
            <Sider></Sider>
            <Footer></Footer>
        </div>
    )
}

export default App