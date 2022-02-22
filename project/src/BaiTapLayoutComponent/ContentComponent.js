import React, { Component } from "react";
import Card from "./Card";

export default class ContentComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
