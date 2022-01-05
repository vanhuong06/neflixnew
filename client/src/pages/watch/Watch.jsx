import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import { useHistory } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  const history = useHistory();
  return (
    <div className="watch">
      {/* <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link> */}
      <button onClick={history.goBack}>
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </button>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
