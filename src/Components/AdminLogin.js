


import React,{useState, useEffect,} from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    var navigate=useNavigate()

    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState({})

    const validation = () => {

        var isValid = true

        if (!mobileNumber || !(/^[0-9]{10}$/.test(mobileNumber))) {
            handleError("mobileNumber", "Invalid Mobile Name")
            isValid = false
        }
        // else{
        //     var isValid = false
        //     // alert(1)
        // }
        return isValid
        
    }
    // console.log(validation())

  const handleMobileLogin = () => {
    if(validation()){navigate('/address')}
    // validation()
    // Handle mobile login logic here
    console.log('Logging in with mobile number...');
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Logging in with Google...');
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
    console.log('Logging in with Facebook...');
  };

  const handleError = (inputs, value) => {

    setError((prev) => ({ ...prev, [inputs]: value }))


}

      

  return (
    <Container maxWidth="sm" style={{padding:50}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField label="Mobile Number" fullWidth 
          
             // html input attribute
                              name="mobileno"
                              type="mobileno"
                              placeholder="Enter Mobile No"
                            error={!error.mobileNumber ? false : true}
                            helperText={error.mobileNumber}
                            value={mobileNumber}
                            onChange={(event) => setMobileNumber(event.target.value)}
/>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleMobileLogin} >
            Login with Mobile Number
            {error.mobileNumber}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleFacebookLogin}>
            Login with Facebook
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
