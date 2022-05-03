import { Platform, StyleSheet } from 'react-native'
import { colors, sizes } from '../../constants/GlobalStyles'


const marginTitleTop = Platform.OS === 'android' ? 20 : 40;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:Platform.OS === 'android' ? 70 : 90,
        zIndex:1000,
        elevation:1000,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    titleRight:{
        color:colors.primary,
        marginRight:sizes.marginVertical,
        marginTop:marginTitleTop,
    },
    titleMidle:{
        color:colors.primary,
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
        color:colors.primary,
    }
})