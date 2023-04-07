import React from 'react';
import { TextInput, ActionIcon} from '@mantine/core';
import { Search, ArrowRight } from 'tabler-icons-react';

class SearchForm extends React.Component {
    
    render() {

        return (
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <TextInput
                        onChange={this.props.handleChange}
                        icon={<Search /> }
                        radius="xl"
                        size="lg"
                        rightSection={
                            <ActionIcon
                                onClick={this.props.handleSubmit}
                                size={32}
                                radius="xl"
                                color="indigo.5"
                                variant="filled"
                                >
                                <ArrowRight />

                            </ActionIcon>
                        }
                        placeholder="search any city in the world"
                        rightSectionWidth={42}
                    />
                </form>

            </>

        );
    }
}

export default SearchForm;