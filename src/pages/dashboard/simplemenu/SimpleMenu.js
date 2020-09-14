import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "../styles.scss";
import {logoutUser} from "../../../store/actions";




export const SimpleMenu = ({onChange}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const changeView = (value) => {
      onChange(value)
      setAnchorEl(null);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
      console.log('logout!!')
  }

  return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <MenuItem onClick={() => changeView("recipes")}>Recipes</MenuItem>
          <MenuItem onClick={() => changeView("calculator")}>Calculator </MenuItem>
          <MenuItem onClick={() => changeView("calendar")}>Planner</MenuItem>
          <MenuItem onClick={() => changeView("contact")}>Contact</MenuItem>
          <MenuItem onClick={() => changeView("logout")}>Log out</MenuItem>


        </Menu>
      </div>
  );
}