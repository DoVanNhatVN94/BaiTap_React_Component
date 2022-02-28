import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="col-3 ">
        <div className="card">
          <div className="card-head">
            <span>500 x 325</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Delectus, maxime!
            </p>
            <a href="#" className="btn btn-primary">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
