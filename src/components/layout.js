/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import PageTransition from "./pageTransition.jsx"

import "./layout.css"


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isClient: false }
  }
  render() {
    return <React.Fragment key={this.state.isClient}> 
        <header><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
</header>
        <main>{this.props.children}</main>
    </React.Fragment>
  }
  componentDidMount() {
    this.setState({ isClient: true })
  }
}

export default Layout
