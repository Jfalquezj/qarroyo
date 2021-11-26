import Sidebar from "../../common/Sidebar/index";
import { ColNav, Divmain, Divside, TimelineDiv } from "./dashboardelements";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Mapa from "../Mapa/index"
import Perfil from "../Perfil/index"

const Dashboard = () => {
  const [title, setTitle] = useState("");
  return (
    <BrowserRouter>
      <Divmain>
        <ColNav>
          <div >
            <Sidebar active={title}></Sidebar>
          </div>
        </ColNav>
        <div style={{ widht: "100%", display: "flex" }}>
          <TimelineDiv>
            <Switch>
              <Route path="/dashboard">
                <Mapa />
              </Route>
              <Route path="/perfil">
                <Perfil />
              </Route>
            </Switch>
          </TimelineDiv>
        </div>
      </Divmain>
    </BrowserRouter>
  );
};

export default Dashboard;
