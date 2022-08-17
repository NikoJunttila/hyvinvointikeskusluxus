import { SocialIcon } from 'react-social-icons';



 function Yhteystiedot(){
    return(
        <div className="etusivu">
            <div>
                <h3 className='cringe'>Yhteystiedot</h3>
            </div>
        <h2 className='cringe'>Hyvinvointikeskus Luxus</h2>
        <p className="bold">Vastaanotto:</p>
        <p>Kaltsilantie 118, 38220 Sastamala</p>
        <p className="bold">myös etävastaanotto</p>
        <span>ajanvaraus:</span><a href="https://varaa.timma.fi/hyvinvointikeskusluxus" className="ajanvaraus-text">https://varaa.timma.fi/hyvinvointikeskusluxus</a>
        <br></br><br></br>
        <p className="bold">Yhteystiedot:</p>
        <p>Susanna Höijer</p>
        <p>Puh. 040 7249 887</p>
        <p>sähköposti:</p>
        <p>info.hyvinvointikeskusluxus@gmail.com</p>
        <p>Y-tunnus:1773403-5</p>
        <p className="bold">Verottomat hinnat voimassa toistaiseksi</p>
        <iframe title='osoite' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1914.5547338410272!2d23.087790416325742!3d61.323732782400576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ecb7caa1ca4ff%3A0xa84db1b7ea855836!2sKaltsilantie%20118%2C%2038220%20Sastamala!5e0!3m2!1sfi!2sfi!4v1656779059629!5m2!1sfi!2sfi" width="600" height="450" loading="lazy"></iframe>
        <SocialIcon url="https://instagram.com/hyvinvointikeskusluxus" style={{margin: 5}}/>
        <SocialIcon url="https://facebook.com/hyvinvointikeskusluxus" style={{margin: 5}} />
        </div>
    )
}
export default Yhteystiedot