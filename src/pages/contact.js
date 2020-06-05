import React, { Component } from 'react';
import Layout from '../components/layout';
import {MDBRow, MDBCol, MDBContainer, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';
import { Form, Button } from "react-bootstrap"
import image from '../images/contact.jpg';
import SEO from '../components/seo';

export default () =>{
    return(
        <Layout>
            <SEO title="Contact" keywords={[`martin gras`, `macholemon`, `simple design`]} />
            <MDBContainer style={{marginTop:"15vh", marginBottom:"25vh"}}>
                <MDBRow>
                    <MDBCol md="6">
                        <h1 className="h1-responsive font-weight-bold">We'd love to hear from you.</h1>
                        <p>Need some help? We're all ears.</p>

                            <Form style={{maxWidth:"300px", marginTop:"5vh",marginBottom:"10vh"}} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control type="text" name="name" id="name" placeholder="John Smith" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label htmlFor="email">Email address</Form.Label>
                                <Form.Control type="email" name="email" id="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control as="textarea" rows="3" name="message" placeholder="Type your message here..." />
                            </Form.Group>
                            <MDBBtn variant="primary" type="submit">
                                Submit
                            </MDBBtn>
                            </Form>

                    </MDBCol>

                    <MDBCol md="6" className="my-5">
                    <img className="d-block w-100 z-depth-1" src={image} alt="coworkers" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        
        </Layout>
    )
}