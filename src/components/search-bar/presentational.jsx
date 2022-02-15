import React, {Component} from 'react'
import {Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {CheckIcon, SearchIcon} from "@chakra-ui/icons";

class SearchBar extends Component {
    render() {
        return (
            <InputGroup>
                <InputLeftElement children={<SearchIcon color='gray.300' />} />
                <Input placeholder='Search Ronin address' />
                <InputRightElement children={<CheckIcon color='green.500' />} />
            </InputGroup>
        )
    }
}

export default SearchBar;
