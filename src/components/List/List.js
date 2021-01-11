import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 40px;

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(to bottom, #a577f3, #7376f6);
    height: 100%;
    width: 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const List = () => {
  return (
    <StyledList>
      <ListItem />
    </StyledList>
  );
};

export default List;
