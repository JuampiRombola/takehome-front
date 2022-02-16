import React from 'react'
import {Grid, GridItem, Heading, Image} from "@chakra-ui/react";

const ProfileType = (props) => {
    const {
        type,
        image
    } = props

    return (
        <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(12, 1fr)'
            mb={10}
        >
            <GridItem colSpan={1}>
                <Image boxSize='70px' src={image} alt='investor icon' />
            </GridItem>
            <GridItem colSpan={10} ml={2}>
                <Heading mt={4}>{type} profile</Heading>
            </GridItem>
        </Grid>
    )
}

export default ProfileType;
