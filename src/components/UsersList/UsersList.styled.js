import styled from "styled-components";

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBack = styled.div`
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100px;
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  border-color: #007bff;
  background-color: #3b83bd;
  cursor: pointer;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #6495ed;
  }
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 30px;
  list-style: none;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const UserCard = styled.li`
  position: relative;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
