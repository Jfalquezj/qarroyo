import routes from "../../../lib/routes";
import {
  NavContainer,
  DivElement,
  PHome,
  Divlogo,
  SidebarElements,
} from "./sidebarelements";
import Button from "../../common/Button";
import SelectIcon from "../../../lib/ui/icons/icons";
import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { logoffUser } from "./../../../services/userService";
import Vectorbrain from "../../../lib/ui/vectors/vectorbrain";

const Side = ({ active }) => {
  const [isMobile, setMobile] = useState(window.innerWidth > 1200);
  const history = useHistory();

  const updateMedia = () => {
    setMobile(window.innerWidth > 1200);
  };
  const logOut = () => {
    logoffUser(window);
    history.push("/");
    window.location.reload();
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const { restricted } = routes;
  const result = restricted.filter((word) =>
    [
      "Tablero",
      "Perfil",
    ].includes(word.title)
  );
  return (
    <NavContainer style={{ overflowY: "auto", height: "calc(100vh )" }}>
      <Vectorbrain></Vectorbrain>
      {result.map(({ path, title, index }) => (
        <SidebarElements key={index} to={path}>
          <DivElement style={{ color: active === title ? "#1da1f2" : "#333333" }}>
            <SelectIcon  name={title} />
            <PHome >{title}</PHome>
          </DivElement>
        </SidebarElements>
      ))}
      <div
        style={{
          position: "absolute",
          padding: "20px",
          borderRadius: "30px",
          background: "#d6d6d6",
          bottom: "10px",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={logOut}
      >
        <p style={{ margin: "0px" }}>Cerrar Sesion</p>
      </div>
    </NavContainer>
  );
};

export default withRouter(Side);
