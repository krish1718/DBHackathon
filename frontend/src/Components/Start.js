import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Typography, Container, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import startImage from '../Assets/Images/dementiacaretaker.jpg';
import '../Styles/register.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        button: {
            textTransform: 'none',
            fontSize: '1rem',
        },
    },
});

function Start() {
    const navigate = useNavigate();

    const goToPatient = () => {
        navigate('/patient');
    };

    const goToCareTaker = () => {
        navigate('/caretaker');
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh', 
                margin: 0, 
            }}>
                <Paper elevation={5} style={{ 
                    width: '90%', 
                    maxWidth: '1200px', 
                    padding: '20px', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    backgroundColor: '#ffffff' 
                }}>
                    <img 
                        src={startImage} 
                        alt="Dementia Care" 
                        style={{ 
                            width: '100%', 
                            maxWidth: '600px', 
                            borderRadius: '15px',
                            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            marginBottom: '20px'
                        }} 
                    />
                    <Typography variant="h3" gutterBottom style={{ 
                        marginBottom: '20px', 
                        fontWeight: 'bold' 
                    }}>
                        Select Your Role
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ 
                            margin: '10px', 
                            padding: '15px 30px',
                            fontSize: '1.1rem',
                            borderRadius: '20px'
                        }} 
                        onClick={goToPatient}
                    >
                        Use as Patient
                    </Button>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        style={{ 
                            margin: '10px', 
                            padding: '15px 30px',
                            fontSize: '1.1rem',
                            borderRadius: '20px'
                        }} 
                        onClick={goToCareTaker}
                    >
                        Use as Care Taker
                    </Button>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default Start;
