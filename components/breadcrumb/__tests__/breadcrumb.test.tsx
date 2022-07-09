import { render } from '@testing-library/react';
import { Breadcrumb } from '../breadcrumb';

/**
 * Mocks
 */
jest.mock('nanoid', () => {
  return { nanoid: () => '1234' };
});
const categories = ['Deportes y Fitness', 'Ciclismo', 'Bicicletas'];

/**
 * Tests
 */

describe('breadcrumb component', () => {
  it('should display a list of categories', () => {
    const { container, getByText } = render(
      <Breadcrumb categories={categories} />,
    );

    expect(getByText(categories[0])).toBeDefined();
    expect(getByText(categories[1])).toBeDefined();
    expect(getByText(categories[2])).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
