import * as React from 'react';
import PositionedMenu from "./Menu";


function HeaderMobile(props){
    return(
        <div>
        <div className="header-pic-div">
        </div>
        <div className="header-links">
    <PositionedMenu
    sit1={props.site1}
    sit2={props.site2}
    sit3={props.site3}
    sit5={props.site5}
    sit6={props.site6}
    sit7={props.site7}
    sit8={props.site8}
    sit9={props.site9}
    sit10={props.site10}
    sit11={props.site11}
    sit4={props.site4}
    >    
    </PositionedMenu>
        </div>
    </div>
    )
}

export default HeaderMobile