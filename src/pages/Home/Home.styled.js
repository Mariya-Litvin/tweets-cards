import styled from "styled-components";

export const HomeImg = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 350px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 300px;
  }
`;

export const HomeText = styled.p`
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
    width: 700px;
    font-size: 36px;
    font-weight: 700;
  }
`;
