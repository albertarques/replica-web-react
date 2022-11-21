import React from 'react'
import Button from '../components/button/Button'

/* Components --------------------------------- */
import Form from '../components/form/Form'
import Field from '../components/form/Field'

/* Layouts ------------------------------------ */
import Layout from '../layouts/Layout'
import Row from '../layouts/Row'
import Column from '../layouts/Column'

const Join = () => {
  return (
    <Layout>
      <Row className="row __alignCenter __w50">
        <Column className=" __justCenter __alignRight __h100">
          <h1>Join the <span className='accent'>fun.</span></h1>      
        </Column>
        <Column>
          <Form>
            <Field label="Name:" name="name" type="text" />
            <Field label="Email:" name="email" type="email" />
            <Field label="Password:" name="pass" type="password" />
            <Button className="__w100" text="Join Now"></Button>
          </Form>
        </Column>
      </Row>
    </Layout>
  )
}

export default Join
