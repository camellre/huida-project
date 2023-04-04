import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./LogInPage.module.scss";

function LogInPage() {
  return (
    <>
      <NavBar />
      <div className={style.logInPageWrapper}>
        <h1>Log In</h1>
      </div>
      <Footer />
    </>
  );
}

export default LogInPage;
