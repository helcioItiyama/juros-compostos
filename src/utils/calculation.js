import {numberFormat, moneyFormat} from './format';

export function feeCalculation (value, fee, term) {
  const amount = [];
  const initialValue = value;

  for(let i = 1; i <= term ; i++) {
    const currentValue = value + value * fee/100;

    const calculationObject = {
      term: i,
      oldValue: moneyFormat(currentValue),
      monthlyFee: numberFormat((currentValue * 100 /initialValue - 100).toFixed(2)) + '%',
      total: moneyFormat(currentValue - initialValue),
    }

    amount.push(calculationObject);
    value = currentValue;
  }
  return amount;
}