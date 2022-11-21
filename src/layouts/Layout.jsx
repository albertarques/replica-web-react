import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const Layout = ({children, footer}) => {
  if(footer !== true){
    return (
      <>
        <Header className="__w75"/>
        <main>{children}</main>
        <Footer />
      </>
    )  
  } else {
    return (
      <>
        <Header className="__w75"/>
        <main>{children}</main>
      </>
    )  
  }
}

export default Layout