import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    Center,
    ChakraProvider,
    Container,
    Grid,
    GridItem,
    Heading, Image,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber
} from '@chakra-ui/react'
import SearchBar from './components/search-bar/presentational'
import theme from "./theme";
import {RoninContext} from "./services/roninContext";
import useRonin from "./services/useRonin";
import slp from "./assets/slp.svg";
import axs from "./assets/axs.svg";
import axie from "./assets/axie.png";

const MainApp = () => {
    const roninHook = useRonin()

    return (
        <RoninContext.Provider value={roninHook}>
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
            <Container maxW='container.lg'>
                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={2} bg='gray.700' p={5}>
                        <Grid
                            templateRows='repeat(1, 1fr)'
                            templateColumns='repeat(4, 1fr)'
                            gap={4}
                        >
                            <GridItem colSpan={3}>
                                <Stat>
                                    <StatLabel color='blue.500'>AXS</StatLabel>
                                    <StatHelpText color='blue.200'>Axie Infinity Shard</StatHelpText>
                                    <StatNumber>345,670</StatNumber>
                                    <StatHelpText>USD 23.36</StatHelpText>
                                </Stat>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Center h='100%'>
                                    <Image boxSize='60px' src={axs} alt="axs icon" />
                                </Center>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={2} bg='gray.700' p={5}>
                        <Grid
                            templateRows='repeat(1, 1fr)'
                            templateColumns='repeat(4, 1fr)'
                            gap={4}
                        >
                            <GridItem colSpan={3}>
                                <Stat>
                                    <StatLabel color='red.500'>SLP</StatLabel>
                                    <StatHelpText color='red.200'>Smooth Love Potion</StatHelpText>
                                    <StatNumber>1315,670</StatNumber>
                                    <StatHelpText>USD 223.36</StatHelpText>
                                </Stat>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Center h='100%'>
                                    <Image boxSize='60px' src={slp} alt="slp icon" />
                                </Center>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={2} bg='gray.700' p={5}>
                        <Grid
                            templateRows='repeat(1, 1fr)'
                            templateColumns='repeat(4, 1fr)'
                            gap={4}
                        >
                            <GridItem colSpan={3}>
                                <Stat>
                                    <StatLabel color='green.500'>AXIE</StatLabel>
                                    <StatHelpText color='green.200'>Axie</StatHelpText>
                                    <StatNumber>3</StatNumber>
                                    <StatHelpText color='gray.700'>.</StatHelpText>
                                </Stat>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Center h='100%'>
                                    <Image boxSize='70px' src={axie} alt="axie icon" />
                                </Center>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={6} />
                </Grid>
            </Container>
        </RoninContext.Provider>
    )
}

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <MainApp />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
