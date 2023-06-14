import React, { useState } from 'react';
import MapView from './StaticMapView';
import { Container, Grid, FormControl,TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

const cities = [
  { id: 1, name: 'Pune' },
  { id: 2, name: 'Mumbai' },
  { id: 3, name: 'Nagpur' },
  { id: 4, name: 'Delhi' },
  { id: 5, name: 'Noida' },
];

const locations = {

  
  1: [
    { id: 1, name: 'Khadki' },
    { id: 2, name: 'Pimple Saudagar' },
    { id: 3, name: 'Khadadi' },
    { id: 4, name: 'Hinjewadi' },
  ],
  2: [
    { id: 4, name: '12 khamba' },
    { id: 5, name: 'Morar' },
    { id: 6, name: 'Borivali' },
  ],
  3: [
    { id: 7, name: 'Chandiwadi' },
    { id: 8, name: 'North Side' },
    { id: 9, name: 'West Side' },
  ],
  4: [
    { id: 10, name: 'C.P' },
    { id: 11, name: 'Malvi Nagar' },
    { id: 12, name: 'Chandini Chowk' },
  ],
  5: [
    { id: 13, name: 'Sector 55' },
    { id: 14, name: 'Capitol Hill' },
    { id: 15, name: 'Golf Course Road' },
  ],
 
};

const Address = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [Latitude, setLatitude] = useState('');

  const [Longitude, setLongitude] = useState('');

  const handleCityChange = (event) => {
    const cityId = event.target.value;
    setSelectedCity(cityId);
    setSelectedLocation('');
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleProjectLatitude = (event) => {
    setLatitude(event.target.value);
  };

  const handleProjectLongitude = (event) => {
    setLongitude(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('City:', selectedCity);
    console.log('Location:', selectedLocation);
    console.log('Latitude:', Latitude);
  };

  const cityLocations = selectedCity ? locations[selectedCity] : [];

  // const LocationsInfo = [
  //   { Latitude: 37.7749, Longitude: -122.4194 },
  //   { Latitude: 34.0522, Longitude: -118.2437 },
  //   // Add more locations as needed
  // ];
 


  return (
    <Container style={{padding:50}}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              id="city-select"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <MenuItem value="">Select a city</MenuItem>
              {cities.map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location-select"
              value={selectedLocation}
              onChange={handleLocationChange}
              disabled={!selectedCity}
            >
              <MenuItem value="">Select a location</MenuItem>
              {cityLocations.map((location) => (
                <MenuItem key={location.id} value={location.id}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        
         {/* <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel htmlFor="latitude"></InputLabel>
            <input
              id="latitude"
              type="text"
              value={Latitude}
              onChange={handleProjectLatitude}
            />
          </FormControl>
        </Grid> */}

{/* </Grid> */}

                          <Grid item xs={12}>
                            OR
                          </Grid>
          <Grid item xs={6}>
            <TextField
              label="latitude"
              name="latitude"
              value={Latitude}
              onChange={handleProjectLatitude}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="longitude"
              name="longitude"
              value={Longitude}
              onChange={handleProjectLongitude}
              fullWidth
            />
          </Grid>
        {/* <Grid item xs={12}>  */}
          {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid> */}



<Grid item xs={16}>
          <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>

              </Grid>
      </Grid>
    </Container>
  );
};

export default Address;
