import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, P, A } from "../../../lib/ui/text";

export const StyledRow = styled(Row)`
  height: 100vh;
`;
export const StyledCol = styled(Col)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const StyledHomeCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1Home = styled(H1)`
  padding: 10px 70px 20px 0px;
`;

export const PHome = styled(P)`
  padding: 20px 0px;
  margin: 0;
`;

export const AHome = styled(A)`
  color: #1abc9c;
  &:hover {
    color: black;
  }
`;

export const DivVector = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
