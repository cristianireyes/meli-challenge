import { CurrencyMap, parsedAmount } from '../item-price-helpers';

test('parsed-amount helper', () => {
  expect(parsedAmount(0)).toBe('0');
  expect(parsedAmount(123)).toBe('123');
  expect(parsedAmount(2123)).toBe('2.123');
  expect(parsedAmount(20123)).toBe('20.123');
  expect(parsedAmount(200123)).toBe('200.123');
  expect(parsedAmount(2000123)).toBe('2.000.123');
});

test('currency-map helper', () => {
  expect(CurrencyMap['ARS']).toBe('$');
  expect(CurrencyMap['BRL']).toBe('R$');
  expect(CurrencyMap['USD']).toBe('U$S');
  expect(CurrencyMap['ANOTHER']).toBeUndefined();
});
