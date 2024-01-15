import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Box, Menu, MenuItem } from "@mui/material";

const HeaderMenu = ({openDrawer,setOpenDrawer}) => {
  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = (event) => {
    setOpen(null);
  };

  return (
    <Box>
      <MoreVert onClick={handleClick} />
      <Menu
        keepMounted={true}
        open={open}
        anchorEl={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
        sx={{fontSize:'14px',padding:'15px 63px 5px 24px',color:'#4A4A4A'}}
         onClick={()=>{handleClose(); setOpenDrawer(true)}}>Profile</MenuItem>
       
      </Menu>
    </Box>
  );
};

export default HeaderMenu;
