import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './theme/GlobalStyles';
import Heading from './components/Heading/Heading';
import Logo from './components/Logo/Logo';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 100px 0;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledWrapper className="App">
        <Logo />
        <Heading>Zadanie rekrutacyjne</Heading>
      </StyledWrapper>
    </>
  );
}

export default App;
