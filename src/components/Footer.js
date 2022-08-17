import { SocialIcon } from 'react-social-icons';
function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-text">
            <h3 className='footer-title'>Info</h3>
            <h4>Peruutusehto</h4>
            <p>Alle 24 tuntia peruutettu ajanvaraus - veloitetaan ajanvarauksesta normaali hoitohinta. Peruutukset tulee siis tehdä 24 h ennen varattua aikaa. Peruuttamattomat, unohdetut ajat tai peruutukset, jotka tehty alle 24 h ennen hoitoa veloitetaan täysimääräisesti. Uutta aikaa ei voi varata seuraavalle 24 tunnille.</p>
            <hr></hr>
            <h4>Maksuvälineet</h4>
            <p>Hoitolassa toimii maksuvälineenä reaaliaikainen tilisiirto yrityksen tilille sekä käteinen. Mahdollisuus laskulla maksamiseen on vain etähoitopalvelujen, kurssien ja kodinhoitopalvelujen maksamiseen. Laskulla on maksuaikaa 4 vuorokautta. Laskutusta varten ilmoita nimesi, osoitteesi, ja sähköpostisi.</p>
            <h4>Ajanvaraus</h4>
            <p>Ajanvaraus nettiajanvarauksella, tekstiviestillä, soittamalla tai sähköpostilla.</p>  
            <p>Ajanvaraustilauksen yhteydessä anna nimi, osoitteesi ja sähköpostiosoite sekä toive haluamasi hoitoajan tai palvelun kellonajasta.Etähoitotilauksissa lasku lähetetään sähköpostilla. Yritys ei toimita laskua paperisena.</p>
            <h4>Huomioitavaa</h4>
            <p>Joissakin hoidossa on käytössä eteerisiä öljyjä. Hyvinvointikeskus Luxus ei vastaa asiakkaan allergiasta mikäli hoitojen aikana eteerisistä öljyistä aiheutuu asiakkaalle allergiaa.
            Omasta allergiasta on tällöin suotavaa mainita jo ajanvarauksen yhteydessä. Näin voidaan välttää öljyjen käyttö hoitotilanteessa.</p>
            <hr></hr>
            <h4>Yhteystiedot</h4>
            <p>Hyvinvointikeskus Luxus / Y-tunnus: 1773403-5 / Susanna Höijer / Puh. 040 7249 887 / Sähköposti: info.hyvinvointikeskusluxus@gmail.com</p>
            <p>www.hyvinvointikeskusluxus.com</p>
            <SocialIcon url="https://instagram.com/hyvinvointikeskusluxus/" style={{margin: 5}}/>
           <SocialIcon url="https://facebook.com/hyvinvointikeskusluxus/" style={{margin: 5}} />
            </div>
        </div>
    )
}
export default Footer