
import React from 'react';
import { Grid, Card, Image, Group, Text} from '@mantine/core';
import suncon from '../../icons/suncon.png';
import partlycloudycon from '../../icons/partlycloudycon.png';
import cloudcon from '../../icons/cloudycon.png'
import lightraincon from '../../icons/lightraincon.png';
import lightningcon from '../../icons/lightningcon.png';
import moderateraincon from '../../icons/moderateraincon.png';
import heavyraincon from '../../icons/heavyraincon.png';
import snowcon from '../../icons/snowcon.png'
import smokecon from '../../icons/smokecon.png'

class WeatherDay extends React.Component {

    render() {
        // Set names for weather icons
        const weathericons = {
            "overcast clouds": cloudcon,
            "broken clouds": partlycloudycon,
            "scattered clouds": partlycloudycon,
            "clear": suncon,
            "few clouds": suncon,
            "light shower rain": lightraincon,
            "light rain": lightraincon,
            "moderate rain": moderateraincon,
            "heavy rain": heavyraincon,
            "thunderstorm with rain": lightningcon,
            "snow": snowcon,
            "smoke": smokecon
        };
        return (
            <>
                <Grid gutter={1}>
                    <Grid.Col>
                        <Card>
                            <Card.Section>
                                <Image
                                    src={weathericons[this.props.weather.description.toLowerCase()]}
                                    height={100}
                                    fit="contain"
                                />
                            </Card.Section>
                            <Group position="apart" mt="md" mb="xs">

                                <Text align="left">
                                    {this.props.weather.date.toLowerCase()}
                                </Text>
                                <Text align="left">
                                    {this.props.weather.description.toLowerCase()}
                                </Text>
                            </Group>
                        </Card>
                    </Grid.Col>
                </Grid>
            </>
        )
    }
}

export default WeatherDay;