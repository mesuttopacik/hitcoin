import { Dimensions } from 'react-native'

export const colors = {
    primary: 'black',
    accent: '#ca7df9',

    slightText: 'grey',
    black:'#333533',

    shadowColor: '#000',

    background: '#00afb9',

    borderColor: '#00f5d4',
}
const deviceSize = Dimensions.get('window')

export const sizes = {
windowWidth: deviceSize.width,
windowHeight: deviceSize.height,
marginVertical: 10,
}