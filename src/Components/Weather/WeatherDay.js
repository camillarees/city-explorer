import React from 'react';
import { SimpleGrid, Card, Image, Text, Title } from '@mantine/core';
import suncon from '../../icons/suncon.png';
import partlycloudycon from '../../icons/partlycloudycon.png';
import cloudcon from '../../icons/cloudycon.png'
import lightraincon from '../../icons/lightraincon.png';
import lightningcon from '../../icons/lightningcon.png';
import moderateraincon from '../../icons/moderateraincon.png';
import heavyraincon from '../../icons/heavyraincon.png';
import snowcon from '../../icons/snowcon.png';
import smokecon from '../../icons/smokecon.png';
import { motion } from 'framer-motion';

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
            // <>
            //     {submitted && (
            <>
                <motion.div
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.2, 0.2, 0.2, 0.2],
                    }}
                    initial={{ opacity: 0, y: 23 }}
                    whileInView={{ opacity: 1, y: 5 }}
                    viewport={{ once: true }}
                >
                    <Title mt="md" mb="xs" order={2} align="left" weight="3rem">
                        weather
                    </Title>
                </motion.div>
                <SimpleGrid cols={3}>
                    {this.props.weather.map((day, index) => (
                        <motion.div
                            key={index}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0.2, 0.2, 0.2, 0.2],
                            }}
                            initial={{ opacity: 0, y: 23 }}
                            whileInView={{ opacity: 1, y: 5 }}
                            viewport={{ once: true }}
                        >
                            <Card key={index} p=".5rem">

                                <Card.Section p="0">
                                    <Image
                                        src={weathericons[day.description.toLowerCase()]}
                                        height={80}
                                        fit="contain"
                                    />
                                </Card.Section>
                                <Text fz="md" fw={500} align="center">
                                    {day.date.slice(5)}
                                </Text>
                            </Card>
                        </motion.div>
                    ))}

                </SimpleGrid>

            </>

        )
    }

}

export default WeatherDay;