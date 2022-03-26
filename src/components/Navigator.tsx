import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { HOME_PAGE_PATH } from "./../util/const/Constants";

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE_PATH} element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
