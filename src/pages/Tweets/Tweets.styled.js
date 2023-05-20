import styled from "styled-components";

export const ButtonBack = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100px;
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  border-color: #007bff;
  background-color: #abcdef;
  cursor: pointer;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #6495ed;
  }
`;
