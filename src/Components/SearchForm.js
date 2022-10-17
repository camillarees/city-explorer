import React from 'react';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {

    render() {
        return (
            <>
                <Form onSubmit={this.props.handleSubmit} >
                    <Form.Group>
                        <Form.Label>search any city in the world</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="start typing"
                        />
                    </Form.Group>
                </Form >
            </>

        );
    }
}

export default SearchForm;