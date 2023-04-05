import React from 'react';
import { Text, Divider } from '@mantine/core';
import { motion } from 'framer-motion';

class LatLon extends React.Component {
    render() {
        const { lat, lon, submitted } = this.props;
        return (
            <>
                {submitted && (
                    <>
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
                <Text size="lg">{lat} °N {lon} °W</Text>
                <Divider mt="md" size="sm" />
                </motion.div>
                </>
                )}
            </>
        )
    }
}

export default LatLon;