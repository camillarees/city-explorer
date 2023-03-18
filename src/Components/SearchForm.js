import React from 'react';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {

    render() {
        return (
            <>
                <Form onSubmit={this.props.handleSubmit} >
                    <Form.Group>
                        <Form.Control
                            type="text"
                            onChange={this.props.handleChange}
                            placeholder="search any city in the world"
                        />
                    </Form.Group>
                </Form >
            </>

        );
    }
}

export default SearchForm;