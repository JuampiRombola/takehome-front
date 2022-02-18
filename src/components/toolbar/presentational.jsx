import React from 'react'
import {Center, Container} from "@chakra-ui/react";
import SearchBar from "../search-bar/presentational";

const Toolbar = () => {
    return (
        <Container>
            <Center pt={6} px={2} mb={10}>
                <SearchBar />
            </Center>
        </Container>
    )
}

export default Toolbar;
