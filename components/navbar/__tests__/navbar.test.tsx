import { fireEvent, render } from '@testing-library/react';
import router from 'next/router';
import routerMock from 'next-router-mock';
import { Navbar } from '../navbar';

/**
 * Mocks
 */

jest.mock('next/router', () => require('next-router-mock'));

/**
 * Tests
 */

describe('navbar component', () => {
  it('should render a navbar', () => {
    const { container, getByLabelText } = render(<Navbar />);

    expect(getByLabelText('Logo MercadoLibre')).toBeDefined();
    expect(getByLabelText('Buscar articulos')).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('should navigate to the results page', () => {
    routerMock.setCurrentUrl('/');
    const search = 'Bicicletas';

    const { getByLabelText } = render(<Navbar />);

    // fill input with a search
    const inputSearch = getByLabelText('Buscar articulos');
    fireEvent.change(inputSearch, { target: { value: search } });

    // search item
    const buttonSearch = getByLabelText('Buscar');
    fireEvent.click(buttonSearch);

    expect(router).toMatchObject({
      asPath: `/items?search=${search}`,
      query: { search },
    });
  });
});
