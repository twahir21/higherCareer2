import NotFoundImg from "../../images/404.jpg";
import "../../styles/NotFound.css"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
    <div className="wrapper-404">
      <div className="container link-404">
        <div>
          <div className="error-404">
            <div className="shadow">Oops...!</div>
            <div className="text">Oops...!</div>
          </div>
          <h1>Page Not Found</h1>
          <p>Oops! The page you&#39;re looking for doesn&#39;t exist.</p>
          <Link to="/" className="link-404">Go Back Home</Link>
        </div>
        <img
          alt="404 Error"
          className="side-image"
          height="400"
          loading="lazy"
          src={NotFoundImg}
          width="400"
        />
      </div>
    </div>
    </div>
  )
}

export default NotFound