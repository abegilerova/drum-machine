import React from 'react';
import Card from '@material-ui/core/Card';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from '@material-ui/core/Button';
import {} from 'src/sounds';

const DrumMachine=(props)=>(




<Card>
<MDBContainer id="drum-machine" class="keys">
      <MDBRow>
        <MDBCol size="1">

          <Button data-key="65" class ="drum-pad" id ="clap">Q</Button>
         
        </MDBCol>
        <MDBCol size="1">
          <Button>W</Button>
        </MDBCol>
        < MDBCol size="1">
        <Button>E</Button>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol sm="1">
         <Button>A</Button>
        </MDBCol>
        <MDBCol sm="1">
          <Button>S</Button>
        </MDBCol>
        <MDBCol sm="1">
          <Button>D</Button>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="1">
          <Button>Z</Button></MDBCol>
        <MDBCol md="1">
          <Button>X</Button>
        </MDBCol>
        <MDBCol md="1">
          <Button>C</Button>
        </MDBCol>
      </MDBRow>

      
    </MDBContainer>
</Card>

);

  {<audio data-key="65"  src="sounds/clap.wav"></audio>};
  

export default DrumMachine;