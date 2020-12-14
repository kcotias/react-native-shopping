import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { expect, it } from '@jest/globals';
import { CardItem } from '../modules/Products/components';

const productMock = {
  title: 'titleTest',
  productVariants: [{ price: 1 }],
  images: [{ url: 'imageurl' }],
};

describe('<CardItem/> Component', () => {
  it('matches snapshot', async () => {
    const { unmount, toJSON } = render(<CardItem item={productMock} />);

    expect(toJSON()).toMatchSnapshot();
    await unmount();
  });

  it('renders correctly and buttons work', async () => {
    const { getByTestId, getByText, unmount } = render(<CardItem item={productMock} />);

    expect(getByText(productMock.title)).toBeDefined();
    expect(getByText(`R$ ${productMock.productVariants[0].price}`)).toBeDefined();

    const increase = getByTestId('increase');
    expect(increase).toBeDefined();
    fireEvent.press(increase);

    const decrease = getByTestId('decrease');
    expect(decrease).toBeDefined();

    expect(getByText('1')).toBeDefined();
    fireEvent.press(increase);
    expect(getByText('2')).toBeDefined();
    fireEvent.press(decrease);
    expect(getByText('1')).toBeDefined();
    await unmount();
  });
});
