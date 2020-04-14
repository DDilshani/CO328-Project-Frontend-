'use strict'
import React, { useState } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div className="steps">
      <Card style={{ width: '27.5rem' }}>
        <CardBody>
          <CardText>
            <div className='row'>
              <div className='six columns'>
                <label>Collect Form</label>
                <select placeholder="Date" className='u-full-width form-control' type='text' autoFocus>
                  <option value="">Tomorrow</option>
                  <option value="">Tomorrow</option>
                  <option value="">Tomorrow</option>
                </select>
              </div>
            </div>
            <br></br>


            <div className='row'>
              <div className='six columns'>
                <label>Timeslot</label>
                <select placeholder="Time" className='u-full-width form-control' type='text' autoFocus>
                  <option value="">7.00 AM - 9.00 AM</option>
                  <option value="">9.00 AM - 11.00 AM</option>
                  <option value="">11.00 AM - 13.00 AM</option>
                  <option value="">13.00 AM - 15.00 AM</option>
                </select>
              </div>
            </div>
            <br></br>

            <div className='row'>
              <div className='six columns'>
                <label>Address</label>
                <input className='u-full-width' placeholder='Address' type='text' />
              </div>
            </div>
            <br></br>

            <div className='row'>
              <div className='six columns'>
                <label>Contact Number</label>
                <input className='u-full-width' placeholder='number' type='text' />
              </div>
            </div>

          </CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  )
}
