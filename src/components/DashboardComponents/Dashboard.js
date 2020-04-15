import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';

import Image from 'react-icons/lib/fa/image';
import PickupListItem from './PickupListItem';

class Dashboard extends Component {
   render() {

      return (
         <div>
            <br></br>
            <br></br>

            <div className="dashboard">
               <Container>
                  <Row>
                     <Col>
                        <Image size={200} ></Image>
                        <br></br>
                        <h5 >Schedule a pickup</h5>
                     </Col>
                     <Col>
                        <b>Instructions to Schedule a Pickup</b>
                        <br></br>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                     </Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                     <Col>
                        <div>
                           <br/>
                           <h4>History</h4>
                           <br/>
                           <Table responsive striped >
                              <tbody>
                                 <PickupListItem
                                    pickupState="AWAITING"
                                    pickupId="1000"
                                    pickupDate="01/04/2020"
                                    pickupTime="8.00 AM - 10.00 PM" />

                                 <PickupListItem
                                    pickupState="COMPLETED"
                                    pickupId="1001"
                                    pickupDate="09/03/2020"
                                    pickupTime="4.00 PM - 6.00 PM" />

                                 <PickupListItem
                                    pickupState="INCOMPLETED"
                                    pickupId="1002"
                                    pickupDate="06/03/2020"
                                    pickupTime="2.00 PM - 4.00 PM" />

                                 <PickupListItem
                                    pickupState="COMPLETED"
                                    pickupId="1003"
                                    pickupDate="09/03/2020"
                                    pickupTime="4.00 PM - 6.00 PM" />
                              </tbody>
                           </Table>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      )
   }
}

export default Dashboard;
