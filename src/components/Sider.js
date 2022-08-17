import { SocialIcon } from 'react-social-icons';

 function Sider(){
    return(
        <div className="sider-main">
            <div>
                <h3 className="sider-title">Yhteystiedot</h3>
            </div>
        <h2 className='cringe'>Hyvinvointikeskus Luxus</h2>
        <p className="bold">Vastaanotto:</p>
        <p>Kaltsilantie 118, 38220 Sastamala</p>
        <p className="bold">myös etävastaanotto</p>
        <br></br><br></br>
        <p className="bold">Yhteystiedot:</p>
        <p>Susanna Höijer</p>
        <p>Puh. 040 7249 887</p>
        <p>sähköposti:</p>
        <p>info.hyvinvointikeskusluxus@gmail.com</p>
        <p>Y-tunnus:1773403-5</p>
        <p className="bold">Verottomat hinnat voimassa toistaiseksi</p>
        <SocialIcon url="https://instagram.com/hyvinvointikeskusluxus" style={{margin: 5}}/>
        <SocialIcon url="https://facebook.com/hyvinvointikeskusluxus" style={{margin: 5}} />
        </div>
    )
}
export default Sider