import styled from "styled-components";
import { Button } from "../../components/Button";

export const CustomButton = styled(Button)`
  background: #fcfcfd;
  width: 100px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #23262f;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  @media screen and (max-width: 400px) {
    width: 85px;
  }
`;
