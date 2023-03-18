import React from 'react';
import { TextInput, ActionIcon } from '@mantine/core';
import { Search, ArrowRight } from 'tabler-icons-react';

class SearchForm extends React.Component {
    render() {

        return (
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <TextInput
                        onChange={this.props.handleChange}
                        icon={<Search size="1.1rem" stroke={1.5} color={'gray'} />}
                        radius="xl"
                        size="md"
                        rightSection={
                            <ActionIcon
                                onClick={this.props.handleSubmit}
                                size={32}
                                radius="xl"
                                color={"blue"}
                                variant="filled">
                                <ArrowRight size="1.1rem" stroke={1.5} color={'white'} />

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