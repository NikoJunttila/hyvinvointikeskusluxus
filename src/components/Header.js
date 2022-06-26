function HeaderDeskTop(props){
    return(
        <div>
            <div className="header-pic-div">            
            </div>
            <div className="header-links">
            <button className="header-link" onClick={props.site1}>Etusivu</button>
            <button className="header-link" onClick={props.site2}>Nettiajanvaraus</button>
            <button className="header-link" onClick={props.site3}>Hyvinvointipalvelut</button>
            <button className="header-link" onClick={props.site5}>EAH - koulutus</button>
            <br></br>
            <button className="header-link" onClick={props.site11}>Kauppa</button>
            <button className="header-link" onClick={props.site6}>Hinnasto</button>
            <button className="header-link" onClick={props.site7}>Yhteistiedot</button>
            <button className="header-link" onClick={props.site10}>INFO</button>
            <button className="header-link" onClick={props.site8}>Galleria</button>
            <button className="header-link" onClick={props.site9}>Tapahtumat</button>
            <button className="header-link" onClick={props.site4}>Tietosuojaseloste</button>
            </div>
        </div>
    )
}
export default HeaderDeskTop