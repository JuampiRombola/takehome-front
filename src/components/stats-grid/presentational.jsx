import React, {useContext} from 'react'
import {Container, Grid, GridItem} from "@chakra-ui/react";
import {RoninContext} from "../../services/roninContext";
import StatBox from "../stat-box/presentational";
import axs from "../../assets/axs.svg";
import slp from "../../assets/slp.svg";
import axie from "../../assets/axie.png";

const StatsGrid = () => {
    const {data} = useContext(RoninContext)

    return (
        <Container maxW='container.lg'>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
            >
                <GridItem colSpan={2} bg='gray.700' p={5}>
                    <StatBox
                        stat={{
                            label: 'AXS',
                            subLabel: 'Axie Infinity Shard',
                            total: '345,670',
                            subTotal: '23.36 USD',
                            labelColor: 'blue.500',
                            subLabelColor: 'blue.200',
                            subTotalColor: '',
                            imagePath: axs,
                            imageSize: '60px',
                            imageAlt: 'axs icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={2} bg='gray.700' p={5}>
                    <StatBox
                        stat={{
                            label: 'SLP',
                            subLabel: 'Smooth Love Potion',
                            total: '1315,670',
                            subTotal: '223.36 USD',
                            labelColor: 'red.500',
                            subLabelColor: 'red.200',
                            subTotalColor: '',
                            imagePath: slp,
                            imageSize: '60px',
                            imageAlt: 'slp icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={2} bg='gray.700' p={5}>
                    <StatBox
                        stat={{
                            label: 'AXIE',
                            subLabel: 'Axie',
                            total: '3',
                            subTotal: '.',
                            labelColor: 'green.500',
                            subLabelColor: 'green.200',
                            subTotalColor: 'gray.700',
                            imagePath: axie,
                            imageSize: '70px',
                            imageAlt: 'axie icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={6} />
            </Grid>
        </Container>
    )
}

export default StatsGrid;
