import style from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { HomeGrid } from "./components/HomeGrid/HomeGrid";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <HomeGrid />
    </>
  );
}

export default App;
