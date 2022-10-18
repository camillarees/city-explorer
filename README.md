# City Explorer

![City Explorer Main Page](../images/city-explorer-main.png)

**Author**: Camilla Rees
**Version**: 1.0.0

### Deployment and Documentation

- [Deployed page on Netlify](https://301n28-city-explorer.netlify.app/)
- [Whiteboard](https://www.figma.com/file/5JiHEvvKfL51Qo9UDmR6fV/City-Explorer-Whiteboard) 
- [Trello](https://trello.com/b/UrVXG4Dw/city-explorer)

## Overview
Search for cities to learn all about them. See a map of the city, its coordinates, a current 5 day forecast, and even movies associated with the city! 

## How it Works

 In order to achieve the output listed in the overview above, I built a form to collect city name searches from the user, used the data from the form to query my APIs for the latitude, longitude, map, live forecast and movies related to the city, and used the React Bootstrap Accordion, Image and Card components to display each of these. I also used an error handler to recognize API call errors and render a React Alert component with a respective error message.

## Key Features

![Map](../images/map-photo.png)

### Map: User can view a map of the city searched, centered by city coordinates 

![Weather](../images/forecast.png)

### Weather: User can view the coordinates and 5 day forecast for city searched

![Movies](../images/movies.png)

### Movies: User can browse a visual list of movies associated with city searched, as well as the movie's overview, ratings, and release date

### Application stores previous searches in server memory for future calls, rather than incurring the delay of repeating the request to third-party APIs

## Architecture

- Frontend
    - React.js
    - HTML5
    - CSS3

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- Backend
    - JavaScript
    - Express

APIs
- LocationIQ API
- Weather API
- Yelp Fusion API
- TMDB API

## Change Log
- 10-17-2022 - Application works with recent results, so that user can see information without the app doing unnecessary API calls
- 10-12-2022 - Application displays movie data of the city searched for
- 10-10-2022 - Application displays the forecast of the city searched for
- 10-5-2022 - Application displays an error message for city searches that do not exist in the API
- 10-5-2022 - Application displays a map of the city searched for
- 10-5-2022 - Application displays the name and coordinates of the city searched for

## Credit and Collaborations
- [Manuch Sadri](https://github.com/mcsadri), Whiteboard Collaboration
- [Hexx King](https://github.com/HexxKing), Debugging
- [Justin Hamerly](https://github.com/JustinHamerly), Mentoring on passing props
