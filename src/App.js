import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {Container, Typography} from '@mui/material';

function App() {
    const [places, setPlaces] = useState(["Place 1", "Place 2"]);

    const handleSplitSwap = () => {
        const newPlaces = [...places];
        // For demonstration, I'm just reversing the array
        newPlaces.reverse();
        setPlaces(newPlaces);
    };

    return (
        <Container style={{marginTop: '40px', textAlign: 'center'}}>
            <Typography variant="h4" gutterBottom>
                {places.join(' - ')}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleSplitSwap}>
                Split & Swap
            </Button>
        </Container>
    );
}

export default App;
