import React from 'react'
import {Link} from "react-router-dom"
import Button from '../components/button/Button'
import Layout from '../layouts/Layout'
import Row from '../layouts/Row'
import girl from "../assets/landing-page-girl.png"
import Column from '../layouts/Column'

const Home = () => {
  return (
    <Layout footer="">
      <Row className="rowReverse __alignCenter __w75 __h100">
        <Column className=" __justCenter ">
          <h1>Feel the music</h1>
          <p>Stream over 20 thousand songs with one click</p>
            <Button to="/join"
              text="Join Now"/>
        </Column>
        <Column className=" __justBottom __h100">
            <img src={girl} alt="Black magic woman" />
        </Column>
      </Row>
    </Layout>
  )
}

export default Home
