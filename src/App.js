import React from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import InvalidSearchAlert from './Components/InvalidSearchAlert';
import Accordion from 'react-bootstrap/Accordion';
import LatLon from './Components/LatLon'
import Weather from './Components/Weather';
import Movies from './Components/Movies';
import { AppShell, AspectRatio, Navbar, ScrollArea, Title } from '@mantine/core';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      errorMessage: false,
      weather: [],
      movie: [],
      map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=0,0&zoom=2&size=3000x600`
    }
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  getLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
      console.log('URL: ', url);
      const response = await axios.get(url)
      this.setState({ location: response.data[0], errorMessage: false }, () => this.getMap());
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        errorMessage: true,
        error: error.response.data.error,
        location: {},
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=0,0&zoom=1&size=3000x600`,
      })
    }
  }


  getMap = async () => {
    this.setState({
      map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12&size=3000x600`
    }, () => {
      this.getWeather();
      this.getMovies();
    });
  };

  getWeather = async () => {
    try {
      const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
      const response = await axios.get(weatherUrl);
      console.log(response.data);
      this.setState({ weather: response.data });
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        errorMessage: true,
        error: error.response.data.error,
        location: {},
        map: ''
      })
    }
  }


  getMovies = async () => {
    try {
      const movieUrl = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.searchQuery}`;
      const response = await axios.get(movieUrl);
      this.setState({ movie: response.data });
    } catch (error) {
      this.setState({
        errorMessage: true,
        error: error.response.data.error,
        location: {},
        map: ''
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getLocation();
  }


  render() {
    return (
      <AppShell
      navbar={<Navbar width={{ base: 300 }} height="100%" p="xs">
          { <>
          <Navbar.Section mt="xs">
            <Title order={2}>city explorer</Title>
          </Navbar.Section><Navbar.Section mt="xs">
              <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
              {this.state.errorMessage &&
                <InvalidSearchAlert alert={this.state.error} />}
            </Navbar.Section><Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">

              <Accordion className='accordion accordion-flush' id='accordion' defaultActiveKey="0">
                <Accordion.Item id="accordion-item" eventKey="1">
                  <Accordion.Header>latitude and longitude</Accordion.Header>
                  <Accordion.Body>
                    <h2>{this.state.location.display_name ? this.state.location.display_name.toLowerCase() : ''}</h2>
                    <LatLon lat={this.state.location.lat} lon={this.state.location.lon} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item id="accordion-item" eventKey="2">
                  <Accordion.Header>weather</Accordion.Header>
                  <Accordion.Body>
                    <Weather weatherData={this.state.weather} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item id="accordion-item-movie" eventKey="3">
                  <Accordion.Header>movies</Accordion.Header>
                  <Accordion.Body>
                    <Movies movieData={this.state.movie} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Navbar.Section>
            </>
          }
        </Navbar>
      }
         styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
        >
        {this.state.location.display_name &&
         
            <AspectRatio ratio={ 3 / 5 }
            className='map-image'>
            <iframe
            src={this.state.map}
            title="city map"
            />
            </AspectRatio>
        }
          
   
        </AppShell>
    );
  };
};


export default App;
