import React, {useContext} from 'react'
import {Center, Container, Grid, GridItem, Heading, Image} from "@chakra-ui/react";
import {RoninContext} from "../../services/roninContext";
import StatBox from "../stat-box/presentational";
import axs from "../../assets/axs.svg";
import slp from "../../assets/slp.svg";
import axie from "../../assets/axie.png";
import weth from "../../assets/weth.svg";
import marketplace from "../../assets/marketplace.png";
import breed from "../../assets/breed.png";
import scholar from "../../assets/scholar.png";
import investor from "../../assets/investor.png";
import ProfileType from "../profile-type/presentational";

const StatsGrid = () => {
    const {data} = useContext(RoninContext)

    return (
        <Container maxW='container.lg'>
            <ProfileType type='Scholar' image={scholar}/>
            {/*<ProfileType type='Investor' image={investor}/>*/}
            <Grid
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
                            imageSize: '48px',
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
                            labelColor: 'pink.500',
                            subLabelColor: 'pink.200',
                            subTotalColor: '',
                            imagePath: slp,
                            imageSize: '55px',
                            imageAlt: 'slp icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={2} bg='gray.700' p={5}>
                    <StatBox
                        stat={{
                            label: 'AXIE',
                            subLabel: '.',
                            total: '3',
                            subTotal: 'Owned',
                            labelColor: 'green.500',
                            subLabelColor: 'gray.700',
                            subTotalColor: '',
                            imagePath: axie,
                            imageSize: '62px',
                            imageAlt: 'axie icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={2} bg='gray.700' p={5}>
                    <StatBox
                        stat={{
                            label: 'WETH',
                            subLabel: 'Ronin Wrapped Ether',
                            total: '5',
                            subTotal: '15 USD',
                            labelColor: 'gray.500',
                            subLabelColor: 'gray.200',
                            subTotalColor: '',
                            imagePath: weth,
                            imageSize: '75px',
                            imageAlt: 'weth icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={2} bg='gray.700' p={5}>
                    <StatBox
                        stat={{
                            label: 'Axie Sales',
                            subLabel: '.',
                            total: '235',
                            subTotal: 'Last 30 days',
                            labelColor: 'red.500',
                            subLabelColor: 'red.700',
                            subTotalColor: '',
                            imagePath: marketplace,
                            imageSize: '58px',
                            imageAlt: 'marketplace icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={2} bg='gray.700' p={5}>
                    <StatBox
                        stat={{
                            label: 'Breeds',
                            subLabel: '.',
                            total: '35',
                            subTotal: 'Last 30 days',
                            labelColor: 'yellow.500',
                            subLabelColor: 'yellow.700',
                            subTotalColor: '',
                            imagePath: breed,
                            imageSize: '58px',
                            imageAlt: 'breed icon'
                        }}
                    />
                </GridItem>
                <GridItem colSpan={6} />
            </Grid>
        </Container>
    )
}

export default StatsGrid;
