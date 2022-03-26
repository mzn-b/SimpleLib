import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { closeWindow } from "../util/MenuBarFunctions";

const DefaultView: React.FC<{}> = ({ children }) => {
  return (
    <>
      <AppBar position="static" sx={{ height: 22 }}>
        <Container disableGutters maxWidth={false} sx={{ height: 22 }}>
          <Grid container justifyContent={"right"} sx={{ height: 22 }}>
            <Grid item>
              <MenuButton>
                <CloseIcon />
              </MenuButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <div id={"content"}>{children}</div>
    </>
  );
};

const MenuButton: React.FC<{}> = ({ children }) => {
  return (
    <IconButton
      color="secondary"
      sx={{ paddingLeft: 1, paddingRight: 1, height: 20 }}
      onClick={() => {
        closeWindow();
      }}
    >
      {children}
    </IconButton>
  );
};

export default DefaultView;
