import styled from "styled-components";
import { H1, P, A } from "../../../lib/ui/text";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export const H1Login = styled(H1)`
  padding: 0px 20px 15px 0px;
  margin: 0px;
`;

export const PLogin = styled(P)`
  padding: 10px 0px 2px 0px;
  margin: 0;
  color: #616161;
`;

export const ALogin = styled(A)`
  color: #589EEE;
  margin-bottom: 200px;
  &:hover {
    color: black;
  }
`;
export const Divforgot = styled.div`
  margin: 15px 0 20px 0;
`;

export const Divaccount = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
`;
