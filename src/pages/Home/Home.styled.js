import styled from "styled-components";

export const Section = styled.section`
  width: 480px;
  margin: 0 auto;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const HomeImg = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 350px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 500px;
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
