import React, { Component } from 'react';
import {Form, Container, Row, Col} from 'react-bootstrap';

class IndexComponent extends Component {

constructor(props)
{
  super(props);
  this.state = {
      SwitchHubConnection: null,
      SwitchList: null,
      Machine: {
        Name:'Robin',
        MachineID:'0xABDAWQAC1234AQSFD'
      }
  };
}

componentDidMount = () => 
{
    this.state.SwitchHubConnection = this.InitializeConnection(); 
    this.state.SwitchHubConnection.start()
    .then(this.ConnectToServer)
    .then(this.GetSwitchStatus)
    .catch(err => console.error(err.toString()));
}

InitializeConnection = () => 
{
  const signalR = require("@aspnet/signalr");
  var connection = new signalR.HubConnectionBuilder()
 .withUrl("https://localhost:5001/SignalUSB")
 .configureLogging(signalR.LogLevel.Information)
 .build();

 connection = this.InitializeSingalTriggers(connection);

 return connection;
}

InitializeSingalTriggers = (_hubconnection) => 
{
  _hubconnection.on("NotifyDisconnection", (result) => {
    const test = result;
   });

   _hubconnection.on("NotifyConnection", (result) => {
    const test = result;
   });

   return _hubconnection;
}

ConnectToServer = () => 
{
  this.state.SwitchHubConnection.invoke("ConnectToServer", this.state.Machine).then(function(result){

  });
}

GetSwitchStatus = () => 
{
  this.state.SwitchHubConnection.invoke("GetPeers").then(function(result){
      const test= result;
  });
}

Checked =() =>{
  console.log("test");
}

    render() {
        return (

       <Container fluid="true" >
       <Row className="justify-content-md-center white">

    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={5}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
   
      </Row>

         </Container>
 
        );
    }
}

export default IndexComponent;



