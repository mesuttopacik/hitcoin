import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import App from '../App';

test('should match snapshot', () => { 
    const comp = render(<App />);
    expect(comp).toMatchSnapshot();
 });

