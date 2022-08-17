import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom"

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <i class='fas fa-bars fa-3x'></i>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
 >
     <Link to ="/"><MenuItem onClick={handleClose}>Etusivu</MenuItem> </Link>
     <Link to ="nettiajanvaraus"><MenuItem onClick={handleClose}>ajanvaraus</MenuItem> </Link>
     <Link to ="hyvinvointipalvelut"><MenuItem onClick={handleClose}>Hyvinvointipalvelut</MenuItem> </Link>
     <Link to ="eah"><MenuItem onClick={handleClose}>EAH-koulutus</MenuItem> </Link>
     <Link to ="kauppa"><MenuItem onClick={handleClose}>Kauppa</MenuItem> </Link>
     <Link to ="hinnasto"><MenuItem onClick={handleClose}>Hinnasto</MenuItem> </Link>
     <Link to ="yhteystiedot"><MenuItem onClick={handleClose}>Yhteystiedot</MenuItem> </Link>
     <Link to ="galleria"><MenuItem onClick={handleClose}>Galleria</MenuItem> </Link>
        <Link to ="tapahtumat"><MenuItem onClick={handleClose}>Tapahtumat</MenuItem> </Link>
        <Link to ="susanna"><MenuItem onClick={handleClose}>Susanna</MenuItem> </Link>
        <Link to ="tietosuojaseloste"><MenuItem onClick={handleClose}>Tietosuojaseloste</MenuItem> </Link>
      </Menu>
    </div>
  );
}