import React,{useState}from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Signup from './signin';
import Signin from './signup';
import Paper from '@mui/material/Paper'
const Login=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
    return(
        <Paper square>
       <center>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Signin" />
        <Tab label="Signup" />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Signup handleChange={handleChange}/> 
    </TabPanel>
    <TabPanel value={value} index={1}>
     <Signin handleChange={handleChange}/>
     </TabPanel>
     </center>
  </Paper>
   )
}
export default Login;