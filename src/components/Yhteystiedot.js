//import { SocialIcon } from 'react-social-icons';
//<SocialIcon url="https://facebook.com/hyvinvointikeskusluxus" style={{margin: 5}} />
//<SocialIcon url="https://instagram.com/hyvinvointikeskusluxus" style={{margin: 5}}/>

 function Yhteystiedot(){
    return(
        <div className="etusivu">
            <div>
                <h3>Yhteistiedot</h3>
            </div>
        <h2 >Hyvinvointikeskus Luxus</h2>
        <p className="bold">Vastaanotto:</p>
        <p>Kaltsilantie 118, Sastamala</p>
        <p className="bold">myös etävastaanotto</p>
        <span>ajanvaraus:</span><a href="https://varaa.timma.fi/hyvinvointikeskusluxus" className="ajanvaraus-text">https://varaa.timma.fi/hyvinvointikeskusluxus</a>
        <br></br><br></br>
        <p className="bold">Yhteistiedot:</p>
        <p>Susanna Höijer</p>
        <p>Puh. 040 7249 887</p>
        <p>sähköposti:</p>
        <p>info.hyvinvointikeskusluxus@gmail.com</p>
        <p>Y-tunnus:1773403-5</p>
        <p className="bold">Verottomat hinnat voimassa toistaiseksi</p>
      
        </div>
    )
}
export default Yhteystiedot