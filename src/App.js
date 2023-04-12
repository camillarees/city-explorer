import React from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import InvalidSearchAlert from './Components/InvalidSearchAlert';
import CarouselCard from './Components/Carousel';
import LatLon from './Components/LatLon';
import Weather from './Components/Weather/Weather';
import { AppShell, AspectRatio, Navbar, ScrollArea, Title, Text } from '@mantine/core';
import { motion } from 'framer-motion';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      submitted: false,
      location: {},
      errorMessage: false,
      weather: [],
      images: [],
      map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=0,0&zoom=2&size=1100x900`
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
      this.setState({ location: response.data[0], submitted: true, errorMessage: false }, () => this.getMap());
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        errorMessage: true,
        error: error.response.data.error,
        location: {},
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=0,0&zoom=1&size=1100x900`,
      })
    }
  }


  getMap = async () => {
    this.setState({
      map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12&size=1100x900`
    }, () => {
      this.getWeather();
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


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      errorMessage: false,
    },
      async () => {
        await this.getLocation();
      });
  }


  render() {
    const { location, weather } = this.state;
    const showResults = location && weather;

    return (
      <AppShell
        padding={0}
        navbar={<Navbar width={{ base: "30%" }} height="100%">
          {
            <>
              <Navbar.Section mt="xs" p="md">
                <Title
                  variant="gradient"
                  gradient={{ from: '#364FC7', to: '#BAC8FF', deg: 45 }}
                  order={2} size="3rem"> city <Text span weight=".5rem" inherit>explorer</Text>
                </Title>
              </Navbar.Section>
              <Navbar.Section p="md">
                <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                {this.state.errorMessage &&
                  <InvalidSearchAlert alert={this.state.error} />}
              </Navbar.Section>
              {showResults &&
                <>
                  <Navbar.Section>
                    <CarouselCard location={this.state.location} images={this.state.images} submitted={this.state.submitted} />
                  </Navbar.Section>
                  <Navbar.Section grow component={ScrollArea} mt="sm" p="md">
                    <motion.div
                      transition={{
                        duration: .5,
                        delay: 0.3,
                        ease: [0.2, 0.2, 0.2, 0.2],
                      }}
                      initial={{ opacity: 0, y: 23 }}
                      whileInView={{ opacity: 1, y: 5 }}
                      viewport={{ once: true }}
                    >
                      <Title order={2} weight="3rem">{this.state.location.display_name ? this.state.location.display_name.toLowerCase() : ''}</Title>
                    </motion.div>
                    {showResults &&
                      <>
                        <LatLon lat={this.state.location.lat} lon={this.state.location.lon} submitted={this.state.submitted} />
                        <Weather weatherData={this.state.weather} submitted={this.state.submitted} />
                      </>
                    }
                  </Navbar.Section>
                </>
              }
            </>
          }
        </Navbar>
        }
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        {this.state.location.display_name &&

          <AspectRatio ratio={1 / 1}
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
