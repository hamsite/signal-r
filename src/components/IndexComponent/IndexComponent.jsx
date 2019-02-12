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

       <Container fluid="true" className="white">

         <Row>
            <Col sm={4}>
                   <Form.Group as={Col}>
                    <Form.Label as="legend" column sm={12}>
                     Dining Room Lights
                     <div className="text-primary">
                        ON
                    </div>
                    </Form.Label>


                    <Col sm={8}>
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
            </Col>

            <Col sm={4}>
                 <Form.Group as={Col}>
                    <Form.Label as="legend" column sm={12}>
                    Bed Room Lights
                    <div className="text-primary">
                        ON
                    </div>
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios2"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios2"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios2"
                        id="formHorizontalRadios3"
                      />
                    </Col>
                  </Form.Group>
            </Col>

            <Col sm={4}>
                  <Form.Group as={Col}>
                    <Form.Label as="legend" column sm={12}>
                       Bathroom Lights
                       <div className="text-primary">
                        ON
                       </div>
                    </Form.Label>

                    <Col sm={8}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios3"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios3"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios3"
                        id="formHorizontalRadios3"
                      />
                    </Col>
                  </Form.Group>
            </Col>

         </Row>

       </Container>
  
        );
    }
}

export default IndexComponent;



