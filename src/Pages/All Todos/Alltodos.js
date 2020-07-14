import React from "react";
import { Remove, Checkbox } from "./Alltodoscss";
import { Alltodostag } from "./Alltodoscss";
import { Label } from "./Alltodoscss";
import { Customcheckbox } from "./Alltodoscss";
import { Itemdivision } from "./Alltodoscss";

export default function Alltodos(props) {
  return (
    <div>
      {props.list.map(element => {
        return (
          <Alltodostag>
            <Itemdivision>           
            <Customcheckbox checked={element.checked} onClick={() => props.selectInd(element.id)}>
            </Customcheckbox>
            <Label checked={element.checked}>{element.value}</Label>
            </Itemdivision>
            <Remove onClick={() => props.deleteItem(element.id)}>
              <i class="fa fa-remove"></i>
            </Remove>
          </Alltodostag>
        );
      })}
    </div>
  );
}
