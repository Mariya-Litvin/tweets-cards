import styled from "styled-components";

export const SelectButton = styled.select`
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #3b83bd;
  color: #fff;
  padding: 3px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 130px;
  height: 30px;
  font-weight: 500;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #6495ed;
  }
`;
