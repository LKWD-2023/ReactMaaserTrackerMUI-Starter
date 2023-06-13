import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const AddMaaserPage =() => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '80vh' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Add Maaser
            </Typography>
            <TextField label="Recipient" variant="outlined" fullWidth margin="normal" />
            <TextField label="Amount" variant="outlined" fullWidth margin="normal" />
            <DatePicker
                label="Date"
                value={dayjs(selectedDate)}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} fullWidth margin="normal" variant="outlined" />}
            />
            <Button variant="contained" color="primary">Add Maaser</Button>
        </Container>
    );
}

export default AddMaaserPage;
