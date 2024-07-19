import React, { useState } from "react";
import "../Styles/HomePage.css";
import FeaturesImage1 from "../Assets/Images/startimage.png";
import FeaturesImage2 from "../Assets/Images/startimage.png";
import FeaturesImage3 from "../Assets/Images/startimage.png";
import { Button } from "@mui/material";
import NavigationDialog from "./NavigationDialog"; // Import the dialog component
import { useNavigate } from 'react-router-dom';

const CareTakerHome = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogOptions, setDialogOptions] = useState([]);

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleDialogOpen = (options) => {
        setDialogOptions(options);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const options1 = [
        { label: 'Patient Details', path: '/patient-details', bgColor: '#e3f2fd', textColor: '#1e88e5' },
        { label: 'Patient Location', path: '/map', bgColor: '#e3f2fd', textColor: '#1e88e5' },
        { label: 'Doctor Portal', path: '/doctor-portal', bgColor: '#e3f2fd', textColor: '#1e88e5' },
        { label: 'Daily CheckIn', path: '/daily-checkin', bgColor: '#e3f2fd', textColor: '#1e88e5' },
    ];

    const options2 = [
        { label: 'Watch and Learn', path: '/dementiatypes', bgColor: '#fce4ec', textColor: '#d81b60' },
        { label: 'Comics', path: '/comics', bgColor: '#fce4ec', textColor: '#d81b60' },
    ];

    const options3 = [
        { label: 'All Stories', path: '/dementiadiaries', bgColor: '#e1f5fe', textColor: '#0288d1' }
    ];

    return (
        <div className="body_Homepage">
            <div className="buttonContainer" style={{marginBottom: '70px', width: "100%"}}>
                <div className="holderButtons" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{width: '150px',backgroundColor: 'lavender', padding: '15px', borderBottomRightRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button>Ask Me</Button>
                    </div>
                    <div style={{width: '150px', backgroundColor: 'lavender', padding: '15px', borderBottomLeftRadius: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button onClick={() => handleNavigate('/calender')}>Book Appointment</Button>
                    </div>
                </div>
            </div>
            <div className="feature-wrapper" style={{ marginRight: '50px' }} onClick={() => handleDialogOpen(options1)}>
                <div className="big-feature-section" >
                    <div className="big-feature-container" style={{  backgroundColor: '#edf6f9' }}>
                        <div className="feature-image">
                            <img src={FeaturesImage1} alt="Patient Details"></img>
                        </div>
                        <div className="features-desc">
                            <h4>Patient Details</h4>
                            <p>View detailed patient profiles here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-wrapper-right" style={{ marginLeft: '50px' }} onClick={() => handleDialogOpen(options2)}>
                <div className="big-feature-section" >
                    <div className="big-feature-container" style={{  backgroundColor: 'lavender' }}>
                        <div className="features-desc">
                            <h4>More About Dementia</h4>
                            <p>Learn more about Dementia.</p>
                        </div>
                        <div className="feature-image">
                            <img src={FeaturesImage2} alt="More About Dementia"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-wrapper" style={{ marginRight: '50px' }} onClick={() => handleDialogOpen(options3)}>
                <div className="big-feature-section" >
                    <div className="big-feature-container" style={{  backgroundColor: '#edf6f9' }}>
                        <div className="feature-image">
                            <img src={FeaturesImage3} alt="Engage with the Community"></img>
                        </div>
                        <div className="features-desc">
                            <h4>Engage with the Community</h4>
                            <p>Connect and collaborate with others.</p>
                        </div>
                    </div>
                </div>
            </div>

            <NavigationDialog open={dialogOpen} onClose={handleDialogClose} options={dialogOptions} />
        </div>
    );
};

export default CareTakerHome;
