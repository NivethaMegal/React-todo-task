import styled, { css } from "styled-components";
export const A = styled.a`
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.003);
  &:hover{
    border: 1px solid rgba(175, 47, 47, 0.2);
  }
  color:#777;
`;
export const Clearcompleted = styled.a`
  border: 1px solid transparent;
  background-color: rgba(0, 0, 0, 0.003);
  visibility: ${props =>
    props.listlength > props.count ? "visible" : "hidden"};
  &:hover{
    border-bottom: 1px solid black;
  }  
`;
export const Footerelement = styled.div`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
`;
