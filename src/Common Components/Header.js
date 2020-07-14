import React from "react";
import Input from "./Input Searchbar/Input";
export default function Header(props) {
  return (
    <Input
      addElementValue={props.addElementValue}
      element={props.value}
      keypress={props.keypress}
      list={props.list}
      selectAll={props.selectAll}
      toggle={props.toggle}
      count={props.count}
    />
  );
}
