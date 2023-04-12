import style from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { HomeGrid } from "./components/HomeGrid/HomeGrid";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <HomeGrid />
      <Footer />
    </>
  );
}

export default App;
