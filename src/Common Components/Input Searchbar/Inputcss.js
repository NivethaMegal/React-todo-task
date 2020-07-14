import styled, { css } from "styled-components";
export const Div = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  width:42.2%;
  border: 1px solid #e6e6e6;
  margin:0 auto;
`;
export const Downarrow = styled.div`
  padding :20px;
  display:block;
  color: ${props=>props.count==0 ?  '#737373' : '#e6e6e6'};
`;

export const Inputtag = styled.input`
  padding: 16px 16px 16px 40px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-size: 24px;
  line-height: 1.4em;
  outline: 0;
  width:100%;
`;

