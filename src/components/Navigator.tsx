import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { ERROR_PAGE_PATH, HOME_PAGE_PATH } from "./../util/const/Constants";
import ErrorPage from "./../pages/ErrorPage";

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE_PATH} element={<HomePage />}></Route>
        <Route path={ERROR_PAGE_PATH} element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
