import React, { Component } from 'react'
import Body from './Body.js'
import Footer from './Footer.js'
import Header from './Header.js'





export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    )
  }
}
