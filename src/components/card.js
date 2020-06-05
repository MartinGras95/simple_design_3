import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/mockup.webp"

const CardExample = (props) => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>{props.title}</MDBCardTitle>
                    <MDBCardText>{props.body}</MDBCardText>
                    <MDBBtn href="#">Learn more</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default CardExample;
