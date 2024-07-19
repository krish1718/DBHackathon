import React, { useState } from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import MainCard from "./MainCard";
import { Grid } from "@mui/material";
// import '../Styles/Carousel.css'; // Import custom CSS

const data = [
    {
        image: require('../Assets/Images/dementiacaretaker.jpg'), 
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: require('../Assets/Images/dementiacaretaker.jpg'), 
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: require('../Assets/Images/dementiacaretaker.jpg'), 
        caption: "Caption",
        description: "Description Here"
    } 
];

function Corousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            style={{ height: '100vh' }} // Center vertically in viewport
        >
            <Grid item>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {data.map((slide, i) => (
                            <Carousel.Item key={i}>        
                                <div className="carousel-image-wrapper">
                                    <img
                                        className="d-block w-100 carousel-image"
                                        src={slide.image}
                                        alt={`slider image ${i}`}
                                        style={{height: 500, width: 500}}
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h3>{slide.caption}</h3>
                                    <p>{slide.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
            </Grid>
        </Grid>
    );
}

export default Corousel;
