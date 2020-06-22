import styled from 'styled-components';

export const Container = styled.section `
  width: 850px;
  margin: 0 auto;
  margin-top: 40px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 40px;
    background-color: #98FB98;
    box-shadow: 1px 1px 30px 10px #3CB371 inset;
    padding: 10px;
  }
`;

export const FeeCard = styled.section `
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    margin-left: 10px;
    margin-right: 10px;
`;