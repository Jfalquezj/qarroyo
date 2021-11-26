import logo from "./Flood.png";
import { Link } from "react-router-dom";

const Vectorbrain = () => {

  return (
    <Link to="/dashboard">
      {" "}
      <img src={logo} alt="brain vector" width="120px" />
    </Link>
  );
};

export default Vectorbrain;
