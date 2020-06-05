import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer, MDBCol, MDBRow } from 'mdbreact';



const PlanPanel = (props) => {
    return (
        <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
            <MDBCardHeader color={props.color}></MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>{props.title}</MDBCardTitle>
                <MDBCardText>
                    {props.body}
                    <br />
                    {props.body2}
                    <br />
                    {props.body3}
                    <br />
                    {props.body4}
                    <br />
                    {props.body5}
                    <br />
                    {props.body6}
                    <br />
                    {props.body7}
                    <br />
                    {props.body8}
                    <br />
                    {props.bodyEnd}

                </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter color={props.color}>{props.price}</MDBCardFooter>
        </MDBCard>

    )
}

export default PlanPanel;