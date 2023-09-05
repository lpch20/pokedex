import { useRouteError } from "react-router-dom";
import "./ErrorPage.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src="/images/snorlax-error.jpg"/>
      <p>
        <i>Error 404 pokemon is not' found</i>
      </p>
    </div>
  );
}