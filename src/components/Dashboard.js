import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';

//npm install react-icons@^2 --save
import Image from 'react-icons/lib/fa/image';

import Feedback from './DashboardComponents/Feedback';
import Delete from './DashboardComponents/Delete';
import Navigationbar from './Navigationbar';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navigationbar></Navigationbar>
                <br></br>
                <br></br>

                <div className="dashboard">
                    <Container>
                        <Row>
                            <Col><Image size={200} ></Image>
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
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <td className="await">Awaiting pickup</td>
                                                <td>01/04/2020
                                        <br></br>
                                            8.00 AM - 10.00 AM
                                        </td>
                                                <td><Delete></Delete></td>
                                            </tr>
                                            <tr>
                                                <td className="complete">Completed</td>
                                                <td>09/03/2020
                                        <br></br>
                                            4.00 PM - 6.00 PM
                                        </td>
                                                <td><Feedback></Feedback></td>
                                            </tr>
                                            <tr>
                                                <td className="incomplete">Incompleted</td>
                                                <td>06/03/2020
                                        <br></br>
                                            2.00 PM - 4.00 PM
                                        </td>
                                                <td><Feedback></Feedback></td>
                                            </tr>
                                            <tr>
                                                <td className="complete">Completed</td>
                                                <td>09/03/2020
                                        <br></br>
                                            8.00 AM - 10.00 AM
                                        </td>
                                                <td><Feedback></Feedback></td>
                                            </tr>
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

