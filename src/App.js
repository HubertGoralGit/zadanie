import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './theme/GlobalStyles';
import Heading from './components/Heading/Heading';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';
import MinusIcon from './assets/icons/minus.svg';
import PlusIcon from './assets/icons/plus.svg';

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
        {/* <Button>People</Button> */}
        <ButtonIcon icon={PlusIcon} plus />
        <ButtonIcon icon={MinusIcon} minus />
      </StyledWrapper>
    </>
  );
}

export default App;
