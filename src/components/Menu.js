import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
    props.sit1()
  };
  const handleClose2 = () => {
    setAnchorEl(null);
    props.sit2()
  };
  const handleClose3 = () => {
    setAnchorEl(null);
    props.sit3()
  };
  const handleClose5 = () => {
    setAnchorEl(null);
    props.sit5()
  };
  const handleClose6 = () => {
    setAnchorEl(null);
    props.sit6()
  };
  const handleClose7 = () => {
    setAnchorEl(null);
    props.sit7()
  };
  const handleClose8 = () => {
    setAnchorEl(null);
    props.sit8()
  };
  const handleClose9 = () => {
    setAnchorEl(null);
    props.sit9()
  };
  const handleClose10 = () => {
    setAnchorEl(null);
    props.sit10()
  };
  const handleClose11 = () => {
    setAnchorEl(null);
    props.sit11()
  };
  const handleClose4 = () => {
    setAnchorEl(null);
    props.sit4()
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
        <MenuItem onClick={handleClose1}>Etusivu</MenuItem>
        <MenuItem onClick={handleClose2}>Nettiajanvaraus</MenuItem>
        <MenuItem onClick={handleClose3}>Hyvinvointipalvelut</MenuItem>
        <MenuItem onClick={handleClose5}>EAH-koulutus</MenuItem>
        <MenuItem onClick={handleClose11}>Kauppa</MenuItem>
        <MenuItem onClick={handleClose6}>Hinnasto</MenuItem>
        <MenuItem onClick={handleClose7}>Yhteystiedot</MenuItem>
        <MenuItem onClick={handleClose8}>Galleria</MenuItem>
        <MenuItem onClick={handleClose9}>Tapahtumat</MenuItem>
        <MenuItem onClick={handleClose10}>INFO</MenuItem>
        <MenuItem onClick={handleClose4}>Tietosuojaseloste</MenuItem>
      </Menu>
    </div>
  );
}