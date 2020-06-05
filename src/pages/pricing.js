import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from
"mdbreact";

import Panel from '../components/plan-panel';
export default () =>{
    return(
        <Layout>
            <SEO title="Pricing" keywords={[`martin gras`, `macholemon`, `simple design`]} />

            <MDBContainer style={{marginTop: "15vh", marginBottom: "25vh"}}>
                <MDBRow className="mb-3 text-center">
                    <MDBCol md="12">
                        <h1 className="h1-responsive font-weight-bold">Find your perfect plan.</h1>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="text-center mb-5">
                    <MDBCol>
                        <p><strong>All our plans come with high quality video tutorials and 24/7 online support!</strong></p>
                    </MDBCol>
                </MDBRow>

                <hr className="hr my-5" />

                <MDBRow style={{marginBottom:"25vh"}}>
                    <MDBCol md="4">
                        <Panel 
                        title="Free Trial"
                        body="25 free lessons"
                        body2="Feature"
                        body3="Feature"
                        bodyEnd="Short description of plan"
                        price="Free"
                        color="green"
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <Panel 
                        title="Standard Plan"
                        body="150 lessons"
                        body2="Feature"
                        body3="Feature"
                        body4="Feature"
                        body5="Feature"
                        body6="Feature"
                        bodyEnd="Short description of plan"
                        price="£10 p/m"
                        color="yellow"
                        />
                    </MDBCol>
                    <MDBCol md="4">
                        <Panel 
                        title="Premium Plan"
                        body="500+ lessons"
                        body2="Feature"
                        body3="Feature"
                        body4="Feature"
                        body5="Feature"
                        body6="Feature"
                        body7="Feature"
                        body8="Feature"
                        bodyEnd="Short description of plan"
                        price="£25 p/m"
                        color="indigo"
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="text-center mb-4">
                    <MDBCol md="12">
                        <MDBIcon icon="phone" size="3x" className="red-text" />
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="text-center">
                    <MDBCol md="12">
                        <p>If none of the above plans suit your needs, do not hesitate to contact us and we will figure something out!</p>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        </Layout>
    )
}