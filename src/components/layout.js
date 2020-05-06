/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import PageTransition from "./pageTransition.jsx"
import Cursor from "./Cursor.jsx"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
        <header><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />
</header>
            <Cursor />
            <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
