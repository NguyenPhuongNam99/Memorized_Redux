import React from "react";
import {View,Text,StyleSheet, TouchableOpacity, ActionSheetIOS} from 'react-native';
import {connect} from 'react-redux'
const Word =(props)=>{
    const {en,vn,memorized} =props.myword;
    const memorizedWord =()=>{
        props.dispatch({type:'TOGGLE_MEMORIZED',id:props.myword.id})
    }
    const buttonText = memorized? 'forget' :'memorized';
    const textDecorationLine = memorized ? 'line-through' : 'none';
    return(
        <View style={styles.container} >
            <Text style={{textDecorationLine,color:'white'}}>
                {en}
            </Text>
            <Text style={{color:'white',fontWeight:'bold'}}>
                {vn}
            </Text>
            <View style={styles.controler}>
                <TouchableOpacity onPress={()=>memorizedWord()} style={styles.button}>
                    <Text>{buttonText}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}>
                    <Text>memorized</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'green',
        padding:10,
        margin:10
    },
    controler:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    button:{
        backgroundColor:'white',
        padding:8,
        margin:8
    }
})
export default connect()( Word);