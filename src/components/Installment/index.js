import React, { useState, useEffect } from 'react';
import { Card, Value, FeeValue } from './styles';

export default function Installment({term, oldValue, monthlyFee, total}) {
  const [isNegative, setIsNegative] = useState(false);
  
  useEffect(() => {
    const fee = monthlyFee.replace('%', '').replace(',', '.');
    
    if(+fee < 0) {
      setIsNegative(true)
      return;
    }
    setIsNegative(false)
  }, [monthlyFee])

  return (
    <Card>
      <h2>{term}</h2>
          
      <div>
        <Value isNegative={isNegative}>{oldValue}</Value>
        <Value isNegative={isNegative}>{!isNegative ? `+${total}` : total}</Value>
        <FeeValue isNegative={isNegative}>{monthlyFee}</FeeValue>
      </div>
    </Card>
  )
}
