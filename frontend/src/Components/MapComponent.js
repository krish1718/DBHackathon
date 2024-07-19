import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import "../Styles/Map.css"

const MapComponent = () => {
    const mapRef = useRef(null);
    const boundaryCircleRef = useRef(null);
    const routePolylineRef = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(null);
    const [radius] = useState(2000);
    const [alertTriggered, setAlertTriggered] = useState(false);

    const targetLat = 18.5018;
    const targetLon = 73.8636;

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map', {
                center: [0, 0],
                zoom: 2,
                layers: [
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    })
                ]
            });

            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }
    }, []);

    const showPosition = (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setCurrentPosition([lat, lon]);

        mapRef.current.setView([lat, lon], 16);

        const initialBoundaryCircle = L.circle([lat, lon], {
            color: 'green',
            fillOpacity: 0.1,
            radius: radius
        }).addTo(mapRef.current);

        L.marker([lat, lon]).addTo(mapRef.current)
            .bindPopup('You are here.')
            .openPopup();

        boundaryCircleRef.current = initialBoundaryCircle;
    };

    const showError = (error) => {
        let errorMsg;
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMsg = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMsg = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                errorMsg = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                errorMsg = "An unknown error occurred.";
                break;
            default:
                errorMsg = "An unknown error occurred.";
                break;
        }
        alert(errorMsg);
    };

    const startTravelling = async () => {
        if (boundaryCircleRef.current) {
            boundaryCircleRef.current.setStyle({ color: 'green' });
        }

        if (mapRef.current && currentPosition) {
            const targetLatLng = [targetLat, targetLon];
            try {
                const response = await axios.get(`https://api.openrouteservice.org/v2/directions/driving-car`, {
                    params: {
                        api_key: '5b3ce3597851110001cf6248ab863bb3d9f24ebb9d924822fa58ff7b',
                        start: `${currentPosition[1]},${currentPosition[0]}`,
                        end: `${targetLon},${targetLat}`
                    }
                });

                const coordinates = response.data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
                const routePolyline = L.polyline(coordinates, {
                    color: 'blue',
                    weight: 5,
                    opacity: 0.7
                }).addTo(mapRef.current);

                routePolylineRef.current = routePolyline;

                const animatedMarker = L.marker(currentPosition, {
                    icon: L.divIcon({
                        className: 'custom-marker',
                        html: '<div class="pulse-marker"></div>'
                    })
                }).addTo(mapRef.current);

                let routeIndex = 0;

                const animateMarker = () => {
                    if (routeIndex < coordinates.length && !alertTriggered) {
                        animatedMarker.setLatLng(coordinates[routeIndex]);
                        routeIndex++;

                        const distanceToCenter = mapRef.current.distance(animatedMarker.getLatLng(), boundaryCircleRef.current.getLatLng());

                        if (distanceToCenter > radius) {
                            boundaryCircleRef.current.setStyle({ color: 'red' });
                            alert('Marker has crossed the boundary!');
                            sendSmsAlert('The person has left the geofenced area!');
                            setAlertTriggered(true);
                        } else {
                            setTimeout(animateMarker, 200);
                        }
                    }
                };

                animateMarker();
            } catch (error) {
                console.error("Error fetching route data: ", error);
                alert("Failed to fetch route data.");
            }
        }
    };

    const sendSmsAlert = async () => {
        try {
            await axios.post('http://localhost:3001/send-alert');
        } catch (error) {
            console.error('Error sending SMS:', error);
        }
    };

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>
            <button 
                id="startTravellingBtn" 
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1000,
                    backgroundColor: '#36d6af',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
                onClick={startTravelling}
            >
                Start Travelling
            </button>
        </div>
    );
};

export default MapComponent;
