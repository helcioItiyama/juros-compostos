import styled from 'styled-components';

export const Container = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  span {
    color: red;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Element = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    color: #999999;
  }

  input {
    border: none;
    border-bottom: 1px solid;
  }
`;