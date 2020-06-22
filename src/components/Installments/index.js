import React from 'react';
import Installment from '../Installment';
import { Wrapper } from './styles';

export default function Installments({calculation}) {
  return (
    <>
       {calculation && calculation.map(({term, oldValue, monthlyFee, total}) =>
        (
          <Wrapper key={term}> 
            <Installment 
              term={term}
              oldValue={oldValue}
              monthlyFee={monthlyFee}
              total={total}
            />
          </Wrapper>
        )
      )}
    </>
  )
}
