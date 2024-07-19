import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationDialog = ({ open, onClose, options }) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        onClose(); // Close dialog after navigation
    };

    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            maxWidth="md" 
            fullWidth 
            PaperProps={{
                style: {
                    backgroundColor: '#fff', // Ensure dialog background is white
                }
            }}
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)' // Slightly darkens the backdrop
                }
            }}
        >
            <DialogTitle>Navigation Options</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Grid container spacing={2} direction="column">
                        {options.map((option, index) => (
                            <Grid item xs={12} key={index}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: option.bgColor,
                                        color: option.textColor,
                                    }}
                                    onClick={() => handleNavigate(option.path)}
                                >
                                    {option.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default NavigationDialog;
