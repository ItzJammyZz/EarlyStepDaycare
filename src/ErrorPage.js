import { useRouteError } from "react-router-dom";
import './ErrorPage.css'
import { Helmet } from 'react-helmet-async';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='contentError' id="error-page">

<Helmet>
    <title>Early Steps Daycare - Error ⚠</title>
    <meta name='description' content='Welcome to Early Steps Daycare located in heart of Whitechapel | Offsted Approved| We are currently enrolling, join now!'/>
    <meta name='keyword' content='Daycare, Nursery, Childcare, Whitechapel, Tower Hamlet, Ofsted-approve' />
    <link rel='canonical' href='/error' />
    <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" />
    <script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB"></script>
    </Helmet>

      <h1>Oops...!<span className="line3"></span></h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p> <span className="errorwarn"><strong>Error:</strong>
        <i> {error.statusText || error.message}</i></span>
      </p>
      <p>Please click on Home to redirect back to the home page.</p>
    </div>
  );
}