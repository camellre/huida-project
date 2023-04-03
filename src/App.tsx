import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import HomePageGrid from "./components/HomePageGrid/HomePageGrid";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className={style.mainBodyContainer}>
        <HomePageGrid />
      </div>
      <Footer />
    </>
  );
}

export default App;
