import React,{useState} from 'react';
import {Box} from '@mui/system';
import { Typography } from '@mui/material';
import { Card, CardMedia } from '@mui/material';
import {TextField} from '@mui/material';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import {Button} from '@mui/material';

const today = dayjs();
const twoPM = dayjs().set('hour', 14).startOf('hour');
const threePM = dayjs().set('hour', 15).startOf('hour');

const CreateEvent = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [eventType, setEventType] = useState('');
  const [typeOfFood, setTypeOfFood] = useState('');
  const [eventDateTime, setEventDateTime] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      organizationName,
      eventType,
      typeOfFood,
      eventDateTime,
    };
    console.log(formData); // you can replace this with your own logic to save the form data
  };


  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignContents: 'center'}}>
        <Card sx={{ maxWidth: 1000 }}>
        <Typography variant = 'h2' color='#006D82' alignContent={'center'}>Create Post</Typography>
      <form onSubmit={handleSubmit}>
        <label><Typography variant='h4' color='#006D82'>Organization Name: <TextField id="filled-basic" label="Organization Name" variant="filled" flexGrow = '1'/></Typography></label>
        <label><Typography variant='h4' color='#006D82'>Event Type: <TextField id="filled-basic" label="Event Type" variant="filled" flexGrow = '1' /></Typography></label>

        <label> <Typography variant='h4' color='#006D82'>Type of Food: <TextField id="filled-basic" label="Event Type" variant="filled" flexGrow = '1'/></Typography></label>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid
          container
          columns={{ xs: 1, lg: 2 }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <DateCalendar defaultValue={today} disableFuture />
          </Grid>
          <Grid item>
            <TimeClock defaultValue={twoPM} maxTime={threePM} />
          </Grid>
        </Grid>
      </LocalizationProvider>
      <Typography ><Button variant = 'contained'>Submit</Button></Typography>
        </form>


        </Card>
    </Box>
  )
}

export default CreateEvent