import React from "react";
import { Inputtag } from "./Inputcss";
import { Div } from "./Inputcss";
import { Downarrow } from "./Inputcss";

export default function Input(props) {
  return (
    <div>
      <Div>
        {props.list.length > 0 ? 
          <Downarrow onClick={props.selectAll} count={props.count}>
            <i class="fa fa-chevron-down"></i>
          </Downarrow>
         : null}
          <Inputtag
            type="text"
            placeholder="What needs to be done ?"
            onChange={props.addElementValue}
            onKeyPress={props.keypress}
            value={props.element}
          ></Inputtag>
      </Div>
    </div>
  );
}
