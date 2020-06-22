export const numberFormat = (number) => {
 return Intl.NumberFormat('pt-BR').format(number)
}

export const moneyFormat = (number) => {
  return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number)
}