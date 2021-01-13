import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/index';
import GlobalStyles from './theme/GlobalStyles';
import Heading from './components/Heading/Heading';
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
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

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <StyledWrapper className="App">
        <Logo />
        <Heading>Zadanie rekrutacyjne</Heading>
        <Form />
      </StyledWrapper>
    </Provider>
  );
};

export default App;
