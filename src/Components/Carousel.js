import React from 'react';
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
    
      const images = [
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80',
        'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80',
        'https://images.unsplash.com/photo-1585944285854-d06c019aaca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      ];

    function CarouselCard() {

    const { classes } = useStyles();
  
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
  