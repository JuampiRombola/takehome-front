import React from 'react'
import {Center, Grid, GridItem, Image, Stat, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";

const StatBox = (props) => {
    const {
        label,
        subLabel,
        total,
        subTotal,
        labelColor,
        subLabelColor,
        subTotalColor,
        imagePath,
        imageSize,
        imageAlt
    } = props.stat

    return (
        <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
            w='100%'
        >
            <GridItem colSpan={3}>
                <Stat>
                    <StatLabel color={labelColor}>{label}</StatLabel>
                    <StatHelpText color={subLabelColor}>{subLabel}</StatHelpText>
                    <StatNumber>{total}</StatNumber>
                    <StatHelpText color={subTotalColor}>{subTotal}</StatHelpText>
                </Stat>
            </GridItem>
            <GridItem colSpan={1}>
                <Center h='100%'>
                    <Image boxSize={imageSize} src={imagePath} alt={imageAlt} />
                </Center>
            </GridItem>
        </Grid>
    )
}

export default StatBox;
