import HeaderMobile from "./HeaderMobile"
import { Link} from "react-router-dom"

function HeaderDeskTop(){
    return(
        <div>
              <div className="header-pic-div"> 
    <div className="centered"><span>Hyvinvointikeskus Luxus</span></div>           
    </div>
            <div className="nav-center">
                <div className="nav-header">
               <HeaderMobile />
                </div>
                <div className="header-links">
           <Link to ="/"> <button className="header-link" >Etusivu</button> </Link>
           <Link to ="nettiajanvaraus"> <button className="header-link" >ajanvaraus</button> </Link>
           <Link to ="hyvinvointipalvelut"><button className="header-link" >Hyvinvointipalvelut</button> </Link>
           <Link to ="eah"> <button className="header-link" >EAH - koulutus</button> </Link>
           <br></br>
           <Link to ="kauppa"> <button className="header-link" >Kauppa</button> </Link>
           <Link to ="hinnasto"> <button className="header-link" >Hinnasto</button> </Link>
           <Link to ="yhteystiedot"> <button className="header-link" >Yhteystiedot</button> </Link>
           <Link to ="susanna"> <button className="header-link" >Susanna</button> </Link>
           <Link to ="galleria"><button className="header-link" >Galleria</button> </Link>
           <Link to ="tapahtumat"> <button className="header-link" >Tapahtumat</button></Link>
           <Link to ="tietosuojaseloste"> <button className="header-link" >Tietosuojaseloste</button> </Link>
            </div>
           
            </div>
        </div>
    )
}
export default HeaderDeskTop