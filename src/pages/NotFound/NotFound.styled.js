import styled from "styled-components";

export const NotFoundText = styled.h1`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin: 0 auto;

  text-align: center;
  color: #423189;
  font-size: 30px;
  font-weight: 700;
  width: 250px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 700px;
    font-size: 36px;
    font-weight: 700;
  }
`;
