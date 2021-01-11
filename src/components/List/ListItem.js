import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import MinusIcon from '../../assets/icons/minus.svg';

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 30px;
  height: 30px;
`;

const ListItem = () => {
  return (
    <StyledListItem>
      <p>Siema</p>
      <StyledButtonIcon icon={MinusIcon} minus />
    </StyledListItem>
  );
};

export default ListItem;
