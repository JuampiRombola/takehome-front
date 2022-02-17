import React, {useContext} from 'react'
import {Container, Grid, GridItem, IconButton, Text} from "@chakra-ui/react";
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
import question from "../../assets/question.png";
import ProfileType from "../profile-type/presentational";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {AXIES_KEY, AXS_KEY, BOUGHT_AXIES_KEY, BREEDS_KEY, SLP_KEY, WETH_KEY} from "./statsKeys";

const StatsGrid = () => {
    const {data, loading} = useContext(RoninContext)

    return (
        <Container maxW='container.lg'>
            {!loading && data.hasOwnProperty('isInvestor') && data.isInvestor && <ProfileType type='Investor profile' image={investor}/>}
            {!loading && data.hasOwnProperty('isInvestor') && !data.isInvestor && <ProfileType type='Scholar profile' image={scholar}/>}
            {loading && <ProfileType type="Investor or scholar profile?" image={question}/>}
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
                            total: data.hasOwnProperty('stats') ? data.stats[AXS_KEY] : '0',
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
                            label: 'WETH',
                            subLabel: 'Ronin Wrapped Ether',
                            total: data.hasOwnProperty('stats') ? data.stats[WETH_KEY] : '0',
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
                            label: 'Claimed SLP (last 30 days)',
                            subLabel: 'Smooth Love Potion',
                            total: data.hasOwnProperty('stats') ? data.stats[SLP_KEY] : '0',
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
                            total: data.hasOwnProperty('stats') ? data.stats[AXIES_KEY] : '0',
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
                            label: 'Bought Axies',
                            subLabel: '.',
                            total: data.hasOwnProperty('stats') ? data.stats[BOUGHT_AXIES_KEY] : '0',
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
                            total: data.hasOwnProperty('stats') ? data.stats[BREEDS_KEY] : '0',
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
            <Text align='right' color='gray.500' mt={1}>
                Pixel Front End Take-Home by Juan Pablo Rombolá
                <IconButton
                    aria-label='Go to Github'
                    colorScheme='dark'
                    size='xs'
                    ml={1}
                    mb={1}
                    icon={<ExternalLinkIcon color='gray.600' />}
                    onClick={() => window.open("https://github.com/JuampiRombola/takehome-front", "_blank")}
                />
            </Text>
        </Container>
    )
}

export default StatsGrid;
