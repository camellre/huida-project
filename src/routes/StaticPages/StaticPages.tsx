import { Outlet } from "react-router-dom";
import { HomeGrid } from "../../components/HomeGrid/HomeGrid";
import { PageWrapper } from "../../genericComponents/PageWrapper/PageWrapper";

export const HomePage = () => {
  return <PageWrapper page={<HomeGrid />} />;
};

export const CitizenshipPage = () => {
  return <PageWrapper page={<Outlet />} />;
};

export const ServicePage = () => {
  return <PageWrapper page={<Outlet />} />;
};
