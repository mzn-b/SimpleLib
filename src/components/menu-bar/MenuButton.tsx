import React from "react";
import { IconButton } from "@mui/material";

type MenuButtonProps = { functionality: () => void };

const MenuButton: React.FC<MenuButtonProps> = ({ children, functionality }) => {
  return (
    <IconButton
      color="secondary"
      sx={{ paddingLeft: 1, paddingRight: 1, height: 20 }}
      onClick={functionality}
    >
      {children}
    </IconButton>
  );
};

export default MenuButton;
