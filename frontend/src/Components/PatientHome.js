import React from 'react';
import CarouselComponent from './CarouselComponent';
import "../Styles/PatientHome.css";
import { useNavigate } from 'react-router-dom';

function PatientHome() {

  const navigate = useNavigate();

  const btnArray = [
    { name: "Contact", routeAddr: "/contact" },
    { name: "Quiz", routeAddr: "/quiz" },
    { name: "Meditation", routeAddr: "/meditation" },
    { name: "Checklist", routeAddr: "/confusion" }
  ];

  return (
    <div className="PatientContainer">
      <div className="upperContainer">
        <CarouselComponent />
      </div>
      <div className="lowerContainer" style={{ padding: "15px" }}>
        <div className="gridButtons">
          {btnArray.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  backgroundColor: "teal",
                  borderRadius: "10px",
                  height:"80px"
                }}
                onClick={() => navigate(item.routeAddr)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          style={{
            fontSize: "40px",
            fontWeight: "bolder",
            backgroundColor: "red",
            borderRadius: "500px",
            width: "100px",
            height:"100px"
          }}
        >
          SOS
        </button>
      </div>
    </div>
  );
}

export default PatientHome;
