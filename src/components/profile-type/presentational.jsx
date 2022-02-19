import React from 'react'
import {Heading, Image, Wrap, WrapItem} from "@chakra-ui/react";

const ProfileType = (props) => {
    const {
        type,
        image,
    } = props

    return (
        <Wrap mx={1} mb={10} justify={['center', 'center', 'center', 'left']}>
            <WrapItem>
                <Image boxSize='70px' src={image} alt={`${type} icon`} />
            </WrapItem>
            <WrapItem>
                <Heading ml={2} mt={4} align='center'>{type}</Heading>
            </WrapItem>
        </Wrap>
    )
}

export default ProfileType;
