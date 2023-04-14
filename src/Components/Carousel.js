import React from 'react';
import { Image, rem, getStylesRef } from '@mantine/core';
import { Carousel } from '@mantine/carousel';


class CarouselCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.display_name !== this.props.location.display_name) {
      this.fetchImages(this.props.location.display_name);
    }
  }

  fetchImages = async (locationName) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${locationName}&orientation=landscape&page=1&per_page=5`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    this.setState({ images: data.results.map((result) => result.urls.regular) });
  };


  render() {
    const { images } = this.state;
    const { submitted } = this.props;

    const slides = images.map((image) => (
      <Carousel.Slide key={image}>
        <Image src={image} height={220} />
      </Carousel.Slide>

    ));

    return (
      <>
          {submitted && (
        <Carousel
          withIndicators
          loop
          style={{
            root: {
              '&:hover': {
                [`& .${getStylesRef('carouselControls')}`]: {
                  opacity: 1,
                },
              },
              controls: {
                ref: getStylesRef('carouselControls'),
                transition: 'opacity 150ms ease',
                opacity: 0,
              },

              indicator: {
                width: rem(4),
                height: rem(4),
                transition: 'width 250ms ease',

                '&[data-active]': {
                  width: rem(16),
                },
              },

            }
          }
          }
        >
          {slides}
        </Carousel>
          )}
      </>
    );
  }

}

export default CarouselCard;

