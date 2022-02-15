import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, Container, extendTheme, Grid, GridItem} from '@chakra-ui/react'
import SearchBar from './components/search-bar/presentational'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <Grid
              templateRows='repeat(1, 1fr)'
              templateColumns='repeat(10, 1fr)'
              pt={4}
              px={2}
              mb={10}
          >
              <GridItem colSpan={2}/>
              <GridItem colSpan={4} colStart={4}>
                  <SearchBar />
              </GridItem>
              <GridItem colSpan={2} colStart={9}/>
          </Grid>
          <Container maxW='container.xl'>
              <Grid
                  h='200px'
                  templateRows='repeat(2, 1fr)'
                  templateColumns='repeat(5, 1fr)'
                  gap={4}
              >
                  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                  <GridItem colSpan={2} bg='papayawhip' />
                  <GridItem colSpan={2} bg='papayawhip' />
                  <GridItem colSpan={4} bg='tomato' />
              </Grid>
          </Container>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
