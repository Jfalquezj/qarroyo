import logo from "./10189.jpg";
import { Link } from "react-router-dom";

const Medicos = () => {

  return (
    <Link to="/dashboard">
      {" "}
      <div style ={{maxWidth:"1000px"}}>
      <img src={logo} alt="brain vector" width="120%"/>
      </div>
    </Link>
  );
};

export default Medicos;
