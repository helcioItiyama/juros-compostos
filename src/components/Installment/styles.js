import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Value = styled.h3`
  font-size: 14px;
  color: ${props => props.isNegative ? 'red' : 'green'};
`;

export const FeeValue = styled.h4 `
  font-size: 14px;
  color: ${props => props.isNegative ? 'red' : '#000080'};
`;