'use strict'
import React, { useState } from 'react'
import { Card, CardText, CardBody, Button } from 'reactstrap';


export default () => {
  return (
    <div className="steps">
      <Card style={{ width: '27.5rem' }}>
        <CardBody>
          <CardText>

            <div className='row'>
              <div className='ten columns terms'>
                <div><b>Order will pickup within 3 days.</b></div>
                <br></br>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. </div>
            <br></br>
                <span>
                  <Button>Learn More</Button>
                </span>
                <span>&nbsp;&nbsp;</span>
                <span>
                  <Button>I Agree</Button>
                </span>
              </div>
            </div>

          </CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  )
}
