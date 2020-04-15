'use strict'
import React, { useState } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default () => {
   return (
      <div className="steps">
         <Card style={{ width: '27.5rem' }}>
            <CardBody>
               <CardText>

                  <div className='row'>
                     <div className='ten columns terms'>
                        <div><b>Pickup places successfully.</b></div>
                        <br></br>
                        <div><b>You will be contacted soon.</b></div>
                        <br></br>
                        <br></br>
                        <br></br>
                     </div>
                  </div>

               </CardText>
            </CardBody>
         </Card>
         <br></br>
      </div>
   )
}
