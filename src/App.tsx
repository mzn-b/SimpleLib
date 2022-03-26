import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import Navigator from "./components/Navigator";
import DefaultView from "./layouts/DefaultView";
import Loading from "./pages/Loading";
import { theme } from "./util/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={<Loading />}>
        <DefaultView>
          <Navigator />
        </DefaultView>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
