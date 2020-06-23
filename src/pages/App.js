import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import Installments from '../components/Installments';

import { feeCalculation } from '../utils/calculation';
import { Container, FeeCard } from './styles';

function App() {
  const [ value, setValue ] = useState(1000);
  const [ fee, setFee ] = useState(0.5);
  const [ month, setMonth ] = useState(1);

  const handleValue = (event) => {
    setValue(+event.target.value);
  }

  const handleFee = (event) => {
    setFee(+event.target.value);
  }

  const handleTerm = (event) => {
    setMonth(+event.target.value);
  }

  let calculation = feeCalculation(value, fee, month);

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if(fee < -12 || fee > 12 || value < 1 || value > 100000 || month < 1) {
      setErrorMessage(
        `Ops, o valor digitado ultrapassou o limite permitido`
      );
      return;
    }
    setErrorMessage('')
  }, [fee, month, value]);

  return (
    <Container className="App">
    
      <h1>Juros Compostos</h1>

      <Form 
        onHandleValue={handleValue}
        onHandleFee={handleFee}
        onHandleTerm={handleTerm}
        initialValue={value}
        month={month}
        fee={fee}
        errorMessage={errorMessage}
      />
        
      {!errorMessage && (
        <FeeCard>
          <Installments calculation={calculation}/>
        </FeeCard>
      )}
     
    </Container>
  );
}

export default App;
