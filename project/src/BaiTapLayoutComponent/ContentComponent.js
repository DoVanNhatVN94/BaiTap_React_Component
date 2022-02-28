import React, { Component } from "react";
import Card from "./Card";

export default class ContentComponent extends Component {
  render() {
    return (
      <div className="container px-lg-5 pb-5">
        <div className="row justify-content-center">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    );
  }
}
