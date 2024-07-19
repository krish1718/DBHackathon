import React from 'react';
import { Container, Grid, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

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

const Start = () => {
    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
                <Typography variant="h4" gutterBottom>
                Welcome
                </Typography>
            </Grid>
            <Grid item>
                <NavLink to="/patient" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" size="large">
                    Use as Patient
                </Button>
                </NavLink>
            </Grid>
            <Grid item>
                <NavLink to="/care-taker" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary" size="large">
                    Use as Care Taker
                </Button>
                </NavLink>
            </Grid>
            </Grid>
        </Container>
        </ThemeProvider>
    );
};

export default Start;
