import React, { Component } from 'react'
import ContentComponent from './ContentComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent'
import NavComponent from './NavComponent.js'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
          <NavComponent/>
          <HeaderComponent/>
          <ContentComponent/>
          <FooterComponent/>
      </div>
    )
  }
}
