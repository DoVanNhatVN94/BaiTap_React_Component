import React, { Component } from 'react'
import Banner from './Banner.js'
import Item from './Item.js'

export default class Body extends Component {
  render() {
    return (
      <div>
          <Banner/>
          <div className="container px-lg-5 pb-5">
              <div className="row">
                  <Item/>
                  <Item/>
                  <Item/>
                  <Item/>
              </div>
          </div>
      </div>
    )
  }
}
