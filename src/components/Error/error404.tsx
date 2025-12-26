import "./error.scss";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div id="error404">
      <div className="error_container">
        <h1>404</h1>
        <p>Seems like you got lost</p>

        <div className="go_button_container">
          <Link to="/">
            <button>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
