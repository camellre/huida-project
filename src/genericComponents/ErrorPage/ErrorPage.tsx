import { useRouteError } from "react-router-dom";
import style from "./ErrorPage.module.scss";

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={style.errorPageWrapper}>
      <h1>Oops!</h1>
      <p>Sorry! An unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
