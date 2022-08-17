import {Link} from "react-router-dom"



function Etusivu(){
    return(
        <div className="etusivu">
            <p>Hei, kiva että löysit sivuilleni! Täällä Hyvinvointikeskus Luxusessa työskentelee ja Sinua
palvelee näkijän, parantajan ja koulutetun hierojan yli 20 vuosikymmenen kokemuksella ja
ammattitaidoilla Susanna Höijer. Toivotan Sinut tervetulleeksi avaamaan oven omaan hyvinvointiisi saavuttamaan tasapainon,
eheyden ja ilon elämääsi.</p><br></br>
<p><span className="bold">Hyvinvointipalveluillani</span>pyritään löytämään ydinsyyt siitä, miksi terveys tai elämän muut eri
osa-alueet ovat epätasapainossa. Palveluissa toimii lähihoidot vastaanotolla Sastamalassa
sekä myös etähoidot.</p>
<p>Palveluni on suunnattu sinulle , joka
haluat muutosta elämääsi ja lisätä hyvinvointia arkeesi.</p>
<p><span className="bold">Verkkokaupasta</span>voit ostaa hyvää oloa kuten kursseja, lahjakortteja, hoitoja, hoitavia äänitteitä
sekä uniikkeja käsintehtyjä Ailéakorun koruja.</p>
<p><span className="bold">Ajanvaraukset</span>hoidat helpoiten <Link to ="nettiajanvaraus" className="cringe">nettiajanvarauksesta. </Link>Myös tekstiviestillä ja sähköpostitse voit
kysellä aikoja.</p><br></br><p>Tapaamisiin vastaanotolla ja etänä!<span className="cringe">Ja hei muistathan, että</span><span className="cringe2">Sinä itse olet oman elämäsi luksus!</span></p>
<br></br>
<p className="cringe">Ota yhteyttä ja kysy lisää!</p>
            <br></br>

            <div className="kuva-container">
            <div className="left-container">
            <img className="etusivu-kuva" src="https://asiakas.kotisivukone.com/files/hyvinvointikeskusluxus.kotisivukone.com/.thumbs/321A7184_337x.jpg" alt="kuva"></img>
            </div>
            <div className="right-container">
            <p className="etusivu-kuva-text">Valolla ja rakkaudella, minulla on ilo palvella Sinua hyvinvointisi matkalla!
            <br></br>
            Susanna Höijer
            <br></br>
            Parantaja, Näkijä, Kouluttaja, Theta Healing® Practioner, Koulutettu hieroja</p>
            </div>
            <div>
                <img className="etusivu-kuva2" src="https://i.imgur.com/6Qa8W4R.jpeg" alt="etusivu-kuva2"></img>
            </div>
            </div>
        </div>
    )
}
export default Etusivu