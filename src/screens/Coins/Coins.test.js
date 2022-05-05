import React from 'react';
import {render} from '@testing-library/react-native';
import Coins from './Coins'


test('should add coins to list', () => { 
    const comp = render(<Coins />);
    expect(comp).toMatchSnapshot();
 })

