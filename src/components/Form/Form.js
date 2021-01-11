import React from 'react';
import styled from 'styled-components';
import FormName from '../FormName/FormName';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import PlusIcon from '../../assets/icons/plus.svg';
import List from '../List/List';

const StyledWrapper = styled.div`
  width: 600px;
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  :after {
    content: '';
    position: absolute;
    height: calc(100% - 195px);
    top: 100px;
    left: 150px;
    width: 2px;
    background-color: #c9cdd7;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  left: 128px;
  bottom: 50px;
`;

const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-self: flex-end;
  margin: 50px 0;
`;

const Form = () => {
  return (
    <StyledWrapper>
      <FormName>People</FormName>
      <ListsWrapper>
        <List></List>
        <List></List>
      </ListsWrapper>
      <StyledButtonIcon icon={PlusIcon} plus />
    </StyledWrapper>
  );
};

export default Form;
