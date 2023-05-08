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
import { DominicaPage } from "../components/DominicaPage/DominicaPage";
import { GrenadaPage } from "../components/GrenadaPage/GrenadaPage";
import { MaltaPage } from "../components/MaltaPage/MaltaPage";
import { PortugalPage } from "../components/PortugalPage/PortugalPage";
import { StkittsPage } from "../components/StkittsPage/StkittsPage";
import { TurkeyPage } from "../components/TurkeyPage/TurkeyPage";
import { USAPage } from "../components/USAPage/USAPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="citizenship" element={<CitizenshipPage />}>
        <Route index element={<div>Citizenship Page</div>} />
        <Route path="antigua" element={<AntiguaPage />} />
        <Route path="dominica" element={<DominicaPage />} />
        <Route path="grenada" element={<GrenadaPage />} />
        <Route path="malta" element={<MaltaPage />} />
        <Route path="portugal" element={<PortugalPage />} />
        <Route path="stkittis" element={<StkittsPage />} />
        <Route path="turkey" element={<TurkeyPage />} />
        <Route path="usa" element={<USAPage />} />
      </Route>
      <Route path="service" element={<ServicePage />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="/account" element={<AccountPage />}>
        <Route path="profile" element={<AccountProfile />} />
      </Route>
    </Route>
  )
);
