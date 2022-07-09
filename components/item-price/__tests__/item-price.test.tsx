import { render } from '@testing-library/react';
import { Price } from 'utils/types';
import { ItemPrice } from '../item-price';

/**
 * Mocks
 */
const price: Price = {
  amount: 20000,
  currency: 'USD',
  decimals: 20,
};

/**
 * Tests
 */

describe('item-price component', () => {
  it('should show the price of the item with decimals', () => {
    const { container, getByText } = render(<ItemPrice price={price} />);

    expect(getByText('20.000')).toBeDefined();
    expect(getByText('U$S')).toBeDefined();
    expect(getByText(`${price.decimals}`)).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should show the price of the item without decimals', async () => {
    const priceWithoutDecimals: Price = {
      ...price,
      decimals: undefined,
    };
    const { container, getByText, queryByText } = render(
      <ItemPrice price={priceWithoutDecimals} />,
    );

    expect(getByText('20.000')).toBeDefined();
    expect(getByText('U$S')).toBeDefined();
    expect(queryByText(`${priceWithoutDecimals.decimals}`)).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('should show the price of the item with Argentine currency', async () => {
    const priceWithArgentineCurrency: Price = {
      ...price,
      currency: 'ARS',
    };
    const { container, getByText, queryByText } = render(
      <ItemPrice price={priceWithArgentineCurrency} />,
    );

    expect(getByText('20.000')).toBeDefined();
    expect(getByText('$')).toBeDefined();
    expect(queryByText(`${priceWithArgentineCurrency.decimals}`)).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
