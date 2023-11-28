import { Alert, Button } from 'react-bootstrap';
import './Banner.css'
import Offer from './images/ESOffer.jpeg';

function Banner(props) {
  return (
    <div className={`popUp ${props.show ? '' : 'hide'}`}>
    <Alert show={props.show} variant="info">
        <div className='Alert'>
      <Alert.Heading>Welcome to Early Steps Daycare website. Please see our special offer below. </Alert.Heading>
      </div>
      <div className='imageBanner'>
      <img src={Offer} alt='Vacancies' />
      </div>
      {/* <p>
        This is some banner content that will appear at the top of the page.
      </p> */}
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={props.onClose} variant="outline-info">
          Close
        </Button>
      </div>
    </Alert>
    </div>
  );
}

export default Banner;