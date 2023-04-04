import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../genericComponents/ErrorPage/ErrorPage";
import LogInPage from "./LogInPage/LogInPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/login" element={<LogInPage />} />
    </>
  )
);
