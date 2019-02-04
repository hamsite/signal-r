import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';

export default class IndexComponent extends Component {

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
 .withUrl("https://localhost:44352/SignalUSB")
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

    render() {
        return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <Button variant="" href="https://reactjs.org">Learn React</Button>
            </p>         
        </header>
        );
    }
}

