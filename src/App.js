import React, { Component } from 'react';
import DrumMachine from './components/DrumMachine';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import { Container, Row, Col } from 'reactstrap';
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from '@material-ui/core/Button';




    

class App extends Component{
  constructor(props){
    super(props);
    
      
  
    }
    
render (){
  return (
    <Grid 
    container
        
        alignItems="center"
        justify="center"
        display="flex"
        style={{ minHeight: '100vh'}}>
      
       <Grid xs={11} lg={8} item>
       

    
  <DrumMachine  />
  </Grid>
    </Grid>
  );
  }
}

export default App;
