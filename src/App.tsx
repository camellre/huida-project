import style from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
