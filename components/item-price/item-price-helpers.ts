export const parsedAmount = (amount: number): string => {
  const formatter = new Intl.NumberFormat('es-AR');

  return formatter.format(amount);
};

export const CurrencyMap: Record<string, string> = {
  ARS: '$',
  BRL: 'R$',
  USD: 'U$S',
};
