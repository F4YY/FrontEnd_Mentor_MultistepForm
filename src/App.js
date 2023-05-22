import { Multistepform } from "./components/Multistepform";
import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { switchTheme } from './components/Switchtoggle';
import { Attribution, AttributionA } from "./components/styled/multistep.styled";

export const theme = extendTheme({
  components: { Switch: switchTheme },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Multistepform/>
      <footer style={{
        fontSize: '0.5rem',
        color: 'hsl(231, 11%, 63%)',
      }}>
        <Attribution>
            <AttributionA>
              <p>Challenge by<a href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ/hub" rel="noreferrer" target="_blank"
                style={{color: 'hsl(243, 100%, 62%)', fontStyle:'italic'}}
              >&nbsp;Frontend Mentor | Multi-step form.</a></p>
            </AttributionA>
            <AttributionA>
              <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/" style={{color: 'hsl(243, 100%, 62%)', fontStyle:'italic'}}>&nbsp;Riki Wendri</a></p>
            </AttributionA>
        </Attribution>
      </footer>
    </ChakraProvider>
  );
}

export default App;
