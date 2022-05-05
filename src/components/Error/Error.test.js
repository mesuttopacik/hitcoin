import React from 'react';
import {render} from '@testing-library/react-native';
import Error from './Error';

test('should match with snapshot', () => {
  const comp = render(<Error />);
  expect(comp).toMatchSnapshot();
});

test('should render error correctly', () => { 
    const testErrorMessage = 'an error message'
    const comp = render(<Error err={testErrorMessage}/>)
    const errorMassage = comp.getByTestId('error-message').children[0]
    console.log(errorMassage)
    expect(testErrorMessage).toBe(errorMassage)
 })