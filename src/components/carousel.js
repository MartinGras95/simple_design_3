import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";
import image4 from "../images/image-2.webp"
import image2 from "../images/image-3.webp"
import image3 from "../images/image-4.webp"

const CarouselPage = () => {
    return (
        <MDBCarousel activeItem={1} length={3} className="z-depth-1 w-100">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img className="d-block w-100" src={image2} alt="First slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src={image3} alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src={image4} alt="Mattonit's item" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;
