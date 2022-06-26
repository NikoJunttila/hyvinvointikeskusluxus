import GalleriaData from "./GalleriaData"

function Galleria(){
    const gallery = GalleriaData.map(x =>{
        return(
            <div key={x.id}>
                <p>{x.text}</p>
                <img src={x.img} alt={x.id}></img>
            </div>
        )
    })
    return(
        <div className="etusivu">
       {gallery}
    </div>
    )
}
export default Galleria