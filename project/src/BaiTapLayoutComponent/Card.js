import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="p-5 col-3">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-head">
              <span>500 x 325</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              provident ipsa maxime tempore amet dolorem.
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
