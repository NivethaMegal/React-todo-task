import styled, { css } from "styled-components";
export const Remove = styled.button`
  display: block;
  margin: auto 0;
  color: #cc9a9a;
  border: 0;
  background-color: white;
  outline: 0;
  display: none;
  &:hover {
    color:brown;
  }
`;
export const Alltodostag = styled.div`
  color: #777;
  padding: 10px 15px;
  height: 40px;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px #888888;
  &:hover ${Remove} {
    display: block;
  }
`;

export const Customcheckbox = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  background-color:${props=>(props.checked===true? 'green':'none')};
`;
export const Itemdivision=styled.div`
display:flex;`
export const Label = styled.label`
  padding:10px;
  text-decoration: ${props =>
  props.checked === true ? "line-through" : "none"};
  color: ${props => (props.checked === true ? "#d9d9d9" : "black")};
`;
