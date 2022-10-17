import React from 'react';
import Alert from 'react-bootstrap/Alert';

class InvalidSearchAlert extends React.Component {

render() {
    return (
        <>
            <Alert variant="danger">
                <Alert.Heading>{this.state.error}</Alert.Heading>
                <p>
                    please enter a valid location
                </p>
            </Alert>
        </>
    );
}
}

export default InvalidSearchAlert;

