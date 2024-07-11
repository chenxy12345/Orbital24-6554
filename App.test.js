import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Dummy Test', () => {
  it('tests if jest works', () => {
    const { getByText } = render(<Text>Hello, World!</Text>);

    expect(getByText('Hello, World!')).toBeTruthy();
  });
});