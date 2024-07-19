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
    { name: "Solve My Confusion", routeAddr: "/confusion" }
  ];

  return (
    <div className='PatientContainer'>
      <div className='upperContainer'>
        <CarouselComponent />
      </div>
      <div className='lowerContainer'>
        <div className='gridButtons'>
          {btnArray.map((item, index) => {
            return (
              <button type='button' key={index} onClick={() => navigate(item.routeAddr)}>{item.name}</button>
            );
          })}
        </div>
        <button type="button">SOS</button>
      </div>
    </div>
  );
}

export default PatientHome;
