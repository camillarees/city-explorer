import React, { useState, useEffect } from 'react';
import { createStyles, Image, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

    const useStyles = createStyles((theme) => ({
        price: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    
        carousel: {
          '&:hover': {
            [`& .${getStylesRef('carouselControls')}`]: {
              opacity: 1,
            },
          },
        },
    
        carouselControls: {
          ref: getStylesRef('carouselControls'),
          transition: 'opacity 150ms ease',
          opacity: 0,
        },
    
        carouselIndicator: {
          width: rem(4),
          height: rem(4),
          transition: 'width 250ms ease',
    
          '&[data-active]': {
            width: rem(16),
          },
        },
      }));

      
    function CarouselCard({ searchQuery }) {
    const { classes } = useStyles();
    const [images, setImages] = useState([]);


    const fetchImages = async (query) => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=5`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
          },
        }
      );
      const data = await response.json();
      setImages(data.results.map((result) => result.urls.regular));
    };
  
  useEffect(() => {
      fetchImages(searchQuery);
    }, [searchQuery]);

    const slides = images.map((image) => (
      <Carousel.Slide key={image}>
        <Image src={image} height={220} />
      </Carousel.Slide>
    ));
  
    return (
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
          </Carousel>
    );
  }


export default CarouselCard;
  