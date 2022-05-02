import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:Platform.OS === 'android' ? 70 : 90,
        zIndex:1000,
        elevation:1000,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'space-between'
    },
    titleRight:{
        marginRight:10,
        marginTop:40,
    },
    titleMidle:{
        fontWeight:'500',
        fontSize:20,
        marginTop:40,
    },
    goBack:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginTop:40,
    },
})