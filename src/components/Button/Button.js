import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  width: 200px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background: linear-gradient(to bottom, #a577f3, #7376f6);
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 0.1s linear;
  outline: none;

  :hover {
    box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default Button;
