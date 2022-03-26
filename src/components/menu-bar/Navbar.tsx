import React from "react";
import { AppBar, Container, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  closeWindow,
  minimizeWindow,
  maximizeWindow,
} from "../../util/MenuBarFunctions";
import MenuButton from "./MenuButton";

const Navbar: React.VFC<{}> = () => {
  return (
    <AppBar position="static" sx={{ height: 22 }}>
      <Container disableGutters maxWidth={false} sx={{ height: 22 }}>
        <Grid container>
          <Grid item xs={10} className="titlebar">
            <Typography>SimpleLib</Typography>
          </Grid>
          <Grid item xs={2}>
            <Grid container justifyContent={"right"} sx={{ height: 22 }}>
              <Grid item>
                <MenuButton
                  functionality={() => {
                    minimizeWindow();
                  }}
                >
                  <RemoveIcon />
                </MenuButton>
              </Grid>
              <Grid item>
                <MenuButton
                  functionality={() => {
                    maximizeWindow();
                  }}
                >
                  <CheckBoxOutlineBlankIcon />
                </MenuButton>
              </Grid>
              <Grid item>
                <MenuButton
                  functionality={() => {
                    closeWindow();
                  }}
                >
                  <CloseIcon />
                </MenuButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;
