import React, { Component } from "react";
import "./App.css";
import Header from "../src/Common Components/Header";
import Footer from "../src/Common Components/Footer";
import Alltodos from "../src/Pages/All Todos/Alltodos";

export default class App extends Component {
  state = {
    list: [],
    val: "",
    checkedcount: null,
    id:0
  };
  keyPress = ele => {
    this.state.val = this.state.val.trim();
    if (ele.which === 13 && this.state.val != "") {
      this.state.id+=1;
      let updatedlist = [...this.state.list];
      let item = {
        value: this.state.val,
        id: this.state.id,
        checked: false
      };
      updatedlist.push(item);
      this.setState({ list: updatedlist, val: ""}, () => this.checkedcount());
    }
  };

  addElementValue = ele => {
    this.setState({ val: ele.target.value });
  };
  deleteItem = ele => {
    let updatedlist = this.state.list.filter(element => element.id !== ele);
    let updatedcount = 0;
    updatedlist.forEach(ele => {
      if (ele.checked == false) {
        updatedcount = updatedcount + 1;
      }
    });
    this.setState({ list: updatedlist, checkedcount: updatedcount });
  };
  deleteAll = () => {
    let updatedlist = [...this.state.list];
    updatedlist.forEach(ele => {
      ele.checked = true;
    });
    console.log(updatedlist);
    this.setState({ list: updatedlist, checkedcount: 0 });
  };
  selectAll = () => {
    let updatedlist = [...this.state.list];
    this.checkedcount();
    if (this.state.checkedcount <= updatedlist.length) {
      this.deleteAll();
    }
    if (this.state.checkedcount === 0) {
      updatedlist.forEach(ele => {
        ele.checked = !ele.checked;
      });
    }
    this.setState({ list: updatedlist }, () => this.checkedcount());
  };
  selectInd = id => {
    let updatedlist = [...this.state.list];
    updatedlist.forEach(ele => {
      if (id == ele.id) {
        ele.checked = !ele.checked;
      }
    });
    console.log(updatedlist)
    this.setState({ list: updatedlist }, () => this.checkedcount());
  };
  checkedcount = () => {
    let count = 0;
    this.state.list.forEach(ele => {
      if (ele.checked == false) {
        count = count + 1;
      }
    });
    this.setState({ checkedcount: count });
  };
  clearCompleted = () => {
    let updatedlist = this.state.list.filter(
      element => element.checked == false
    );
    this.setState({ list: updatedlist }, () => this.checkedcount());
  };
  render() {
    return (
      <div>
        <h1>todos</h1>
        <Header
          addElementValue={this.addElementValue}
          value={this.state.val}
          keypress={this.keyPress}
          list={this.state.list}
          selectAll={this.selectAll}
          count={this.state.checkedcount}
        />
        {this.state.list.length > 0 ? (
          <Alltodos
            list={this.state.list}
            deleteItem={this.deleteItem}
            selectInd={this.selectInd}
          />
        ) : null}
        {this.state.list.length > 0 ? (
          <Footer
            count={this.state.checkedcount}
            clearCompleted={this.clearCompleted}
            list={this.state.list}
          />
        ) : null}
      </div>
    );
  }
}
