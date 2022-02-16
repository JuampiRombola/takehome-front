import React from 'react'
import {Grid, GridItem, Heading} from "@chakra-ui/react";
import SearchBar from "../search-bar/presentational";

const Toolbar = () => {
    return (
        <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(10, 1fr)'
            pt={4}
            px={2}
            mb={10}
        >
            <GridItem colSpan={2} pl={2}>
                <Heading size='md'>Pixel Front End Take-Home</Heading>
            </GridItem>
            <GridItem colSpan={4} colStart={4}>
                <SearchBar />
            </GridItem>
            <GridItem colSpan={2} colStart={9}/>
        </Grid>
    )
}

export default Toolbar;
