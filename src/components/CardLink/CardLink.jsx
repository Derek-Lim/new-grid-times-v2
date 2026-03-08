import styled from 'styled-components';

const CardLink = styled.a`
  display: block;

  & + & {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default CardLink;
