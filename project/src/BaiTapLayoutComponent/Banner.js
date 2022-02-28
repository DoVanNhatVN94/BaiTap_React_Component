import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <header className="py-5">
  <div className="container px-lg-5">
    <div className="p-4 p-lg-5 bg-light rounded-3 ">
      <div className="m-4 m-lg-5">
        <h1 className="display-5">A warm welcome!</h1>
        <p className="fs-4 text text-black-50">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam corrupti vero beatae, a dolorem fuga, ullam nemo magni recusandae, laudantium consequatur!
        </p>
        <a className="btn btn-primary btn-lg" href="#!">
          Call to action
        </a>
      </div>
    </div>
  </div>
</header>

    );
  }
}
