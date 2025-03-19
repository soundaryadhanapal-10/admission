import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Typography } from '@mui/material';

export const Sidebar = () => {
  return (
    <div className="main">

      <Grid container spacing={2} alignItems={'center'}>
        <div className="sidenavbar">
          <Grid
            container
            spacing={2}
            justifyContent={'space-between'}
            sx={{
              backgroundColor:"darkgray",  
              color: 'black',             
              width: '200px',             
              height: '100vh',             
              position: 'fixed',           
              marginTop: '100px',          
              paddingTop: '50px', 
              paddingLeft:'25px',
              cursor:'pointer'         
            }}
          >
            <ul className="navbar" style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {/* Sidebar links */}
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1">Components</Typography>
                </Link>
              </li>
              
              <li>
                <Link to="/Sample" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1">sample</Typography>
                </Link>
              </li>
              <li>
                <Link to="/Study" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1">Class</Typography>
                </Link>
              </li>
             
            </ul>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};




