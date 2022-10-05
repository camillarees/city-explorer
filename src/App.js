import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {}
    }
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  getLocation = async () => {
  
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log('URL: ', url);
    const response = await axios.get(url);
    console.log('Response Object: ', response);
    console.log('response.data[0]: ', response.data[0]);
    this.setState({ location: response.data[0]});
  }

  render() {
  return (
    <div className ="App">
    <h1>City Explorer</h1>
    <input 
    type="text" 
    onChange={this.handleChange}
    placeholder="Search for a city"
    />
    <button onClick={this.getLocation}>Explore</button>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>City</Accordion.Header>
        <Accordion.Body>
        {this.state.location.display_name &&
    <h2>The city you searched for is {this.state.location.display_name}</h2>}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Latitude</Accordion.Header>
        <Accordion.Body>
        {this.state.location.display_name &&
        <h2>{this.state.location.lat}</h2>}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Longitude</Accordion.Header>
        <Accordion.Body>
        {this.state.location.display_name &&
        <h2>{this.state.location.lon}</h2>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </div >

  );
}
}

export default App;
