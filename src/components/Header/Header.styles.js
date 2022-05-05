import { Platform, StyleSheet } from 'react-native'
import { colors, sizes } from '../../constants/GlobalStyles'


const marginTitleTop = Platform.OS === 'android' ? 20 : 40;
const headerHeight = Platform.OS === 'android' ? 70 : 90;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:headerHeight,
        zIndex:1000,
        elevation:1000,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth: 0.1,
        borderColor: colors.borderColor,
        shadowColor: colors.shadowColor,
        shadowOffset: {width: 0, height: 0.1},
        shadowOpacity: 0.2,
    },
    titleRight:{
        color:colors.accent,
        marginRight:sizes.marginVertical,
        marginTop:marginTitleTop,
    },
    titleMidle:{
        color:colors.accent,
        fontWeight:'500',
        fontSize:20,
        marginTop:marginTitleTop,
    },
    goBackContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:sizes.marginVertical,
        marginTop:marginTitleTop,
    },
    backText:{
        color:colors.accent,
    }
})