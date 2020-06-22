import React from 'react';

import { Container, Wrapper, Element } from './styles';

export default function Form({
  onHandleValue, 
  onHandleFee, 
  onHandleTerm, 
  initialValue,
  errorMessage,
  month,
  fee}) {

  return (
    <Container>
      <Wrapper>
        <Element>
          <label>Montante Inicial:</label>
          <input 
            value={initialValue} 
            type="number" 
            onChange={onHandleValue}
            min="1"
            max="100000"
          />
        </Element>

        <Element>
          <label>Taxas de Juros Mensal:</label>
          <input 
            value={fee} 
            type="number"
            onChange={onHandleFee}
            min="-12"
            max="12"
            step="0.1"
          />
        </Element>

        <Element>
          <label style={{color: 'green'}}>Período (meses):</label>
          <input 
            style={{borderBottom: '1px solid green'}}
            value={month} 
            type="number" 
            onChange={onHandleTerm}
            min="1"  
          />
        </Element>
      
      </Wrapper>

      <span>{errorMessage}</span>

    </Container>
  )
}
