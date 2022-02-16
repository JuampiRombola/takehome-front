import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react'
import theme from "./theme";
import {RoninContext} from "./services/roninContext";
import useRonin from "./services/useRonin";
import Toolbar from "./components/toolbar/presentational";
import StatsGrid from "./components/stats-grid/presentational";

const MainApp = () => {
    const roninHook = useRonin()

    return (
        <RoninContext.Provider value={roninHook}>
            <Toolbar />
            <StatsGrid />
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
