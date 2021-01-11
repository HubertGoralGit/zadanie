import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 45px;
  height: 45px;
  ${({ minus }) =>
    minus &&
    css`
      background: url(${({ icon }) => icon}) no-repeat,
        linear-gradient(to bottom, #f76a90, #f34f6b);
      box-shadow: 0px 10px 5px 0px #ffd8dd;
      background-position: 50% 100%;
    `}

  ${({ plus }) =>
    plus &&
    css`
      background: url(${({ icon }) => icon}) no-repeat,
        linear-gradient(to bottom, #87f2a1, #2be8e4);
      box-shadow: 0px 10px 5px 0px #cdf9f4;
      background-position: 50% 50%;
    `}
  background-size: 60%;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
`;

export default ButtonIcon;
