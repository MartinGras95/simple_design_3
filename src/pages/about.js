import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {MDBRow, MDBCol, MDBContainer, MDBIcon} from "mdbreact";

import Project from "../components/card";

import image5 from '../images/coworkers.webp';

export default () =>{
    return(
        <Layout>
            <SEO title="About" keywords={[`martin gras`, `macholemon`, `simple design`]} />

            <MDBContainer style={{marginTop: "15vh", marginBottom: "25vh"}}>
                <MDBRow className="mb-5">
                    <MDBCol md="12">
                        <h1 className="h1-responsive">About Us</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mb-5">
                    <MDBCol md="5" className="mb-4">
                        <img className="d-block w-100 z-depth-1" src={image5} alt="coworkers" />
                    </MDBCol>
                    <MDBCol md="7">
                        <h2 className="h4-responsive"> <strong>Our Story</strong></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus arcu, porttitor sed mi in, convallis auctor ipsum. Curabitur consectetur, arcu imperdiet condimentum euismod, mauris purus scelerisque libero, vitae gravida nisi tortor et sapien. Quisque rhoncus tristique metus, non rutrum libero posuere suscipit. Duis mattis, mauris vitae tincidunt faucibus, sapien enim congue sapien, ac congue elit dui ac ex. Maecenas venenatis sem nunc, vel euismod tellus fermentum eget. Suspendisse ut lorem vitae lectus scelerisque mattis. Duis hendrerit mattis iaculis. Phasellus a viverra leo, id semper est. Praesent ut ultrices nibh. Vestibulum enim felis, semper quis ligula a, fringilla mollis ante. Sed eleifend, mauris sit amet faucibus sodales, enim erat lacinia sapien, sed dictum magna lorem ornare justo. Ut convallis pharetra augue id finibus. </p>
                    </MDBCol>

                </MDBRow>

                <hr className="hr my-5" />

                <MDBRow className="">
                    <MDBCol md="12">
                        <h2 className="h4-responsive"><strong>Our Process</strong></h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-center my-5" style={{marginTop:"25vh"}}>

                        <MDBCol md="4">
                            <MDBIcon icon="headset" size="3x" className="green-text" />
                            <h5 className="font-weight-bold my-4">Heading</h5>
                            <p className="dark-grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBIcon icon="comments" size="3x" className="green-text" />
                            <h5 className="font-weight-bold my-4">Heading</h5>
                            <p className="dark-grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBIcon icon="grin" size="3x" className="green-text" />
                            <h5 className="font-weight-bold my-4">Heading</h5>
                            <p className="dark-grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </MDBCol>
                </MDBRow>

                <hr className="hr my-5" />
                
                <MDBRow >
                    <MDBCol md="12">
                        <h2 className="h4-responsive"><strong>Recent Projects</strong></h2>
                    </MDBCol>
                </MDBRow>
                <MDBContainer className="d-flex justify-content-center">
                <MDBRow className="mt-5">
                    <MDBCol md="4" className="my-2">
                        <Project
                            title="Project Name"
                            body="Short description of the project"
                        />
                    </MDBCol>
                    <MDBCol md="4" className="my-2">
                        <Project
                            title="Project Name"
                            body="Short description of the project"
                        />                    
                        </MDBCol>
                    <MDBCol md="4" className="my-2">
                        <Project
                            title="Project Name"
                            body="Short description of the project"
                        />
                    </MDBCol>
                </MDBRow>
                </MDBContainer>

                <hr className="hr my-5" />

            </MDBContainer>
        </Layout>
    )
}

