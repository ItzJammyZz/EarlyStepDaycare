import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='contentError' id="error-page">
      <h1>Oops...!<span className="line3"></span></h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p> <span className="errorwarn"><strong>Error:</strong>
        <i> {error.statusText || error.message}</i></span>
      </p>
      <p>Please click on Home at top to direct to the right page.</p>
    </div>
  );
}