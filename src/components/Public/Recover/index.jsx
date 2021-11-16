import Button from "../../common/Button";
import Form from "../../common/Form";
import Input from "../../common/Input";
import Vectorbrain from "../../../lib/ui/vectors/vectorbrain";
import {Link} from "react-router-dom"
import {
  PLogin,
  ALogin,
  H1Login,
  Divaccount,
  StyledContainer,
  DivBoton,
} from "./recoverelements";

const Recover = () => {
  function HandleSubmit() {}

  return (
    <StyledContainer>
      <div>
        <Vectorbrain />
        <H1Login>Recuperar contrasena</H1Login>
        <Form>
          <Input
            key="username"
            title="Email o Username"
            type="text"
            id="username"
            name="username"
            placeholder=""
          />
        </Form>
        <DivBoton>
          <Button
            fluid
            text="Recover your password"
            large
            primary
            onClick={() => HandleSubmit()}
          ></Button>
        </DivBoton>
        <Divaccount>
          <Link to="/login" style={{textDecoration: "none"}}>
          <PLogin>
            Volver a <ALogin>Login</ALogin>
          </PLogin>
          </Link>
        </Divaccount>
      </div>
    </StyledContainer>
  );
};

export default Recover;
