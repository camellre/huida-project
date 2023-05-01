import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../genericComponents/ErrorPage/ErrorPage";
import LogInPage from "./LogInPage/LogInPage";
import AccountPage from "./AccountPage/AccountPage";
import AccountProfile from "../components/AccountProfile/AccountProfile";
import { CitizenshipPage } from "./CitizenshipPage/CitizenshipPage";
import { ServicePage } from "./ServicePage/ServicePage";
import { ContactUsPage } from "./ContactUsPage/ContactUsPage";
import { AntiguaPage } from "../components/AntiguaPage/AntiguaPage";
import { HomePage } from "./HomePage/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="citizenship" element={<CitizenshipPage />} />
      <Route path="citizenship/antigua" element={<AntiguaPage />} />
      <Route path="service" element={<ServicePage />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="/account" element={<AccountPage />}>
        <Route path="profile" element={<AccountProfile />} />
      </Route>
    </Route>
  )
);
