import React from 'react';
import SqdButton from '../components/buttonSqd/SqdButton';

/* Layouts ------------------------------------ */
import Layout from "../layouts/Layout";
import Row from "../layouts/Row"

/* Pictures ----------------------------------- */
import microphone from "../assets/microphone.svg"
import albums from "../assets/albums.svg"
import more from "../assets/more.svg"
import covers from "../assets/covers.jpg"
import Column from '../layouts/Column';


const Discover = () => {
  return (
    <Layout>
      <Row className="row __alignCenter __w75">
        <Column className=" column2 __justCenter __h100">
          <h1>Discover new music</h1>
          <Row className="row">
            <SqdButton text="Charts" img={microphone} goto="/" />
            <SqdButton text="Albums" img={albums} goto="/"/>
            <SqdButton text="More" img={more} goto="/" />
          </Row>
          <p>By joining you can beneift
          by listerning to the latest
          albums released.</p>
        </Column>
        <Column>
          <img src={covers} alt="Some albums covers."></img>
        </Column>
      </Row>
    </Layout>
  )
}

export default Discover
