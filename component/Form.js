import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, ActionSheetIOS} from 'react-native';
import {connect} from 'react-redux'
const Form = (props)=>{
    const [en,setEn] = useState('');
    const [vn,setVn]= useState('');
    const ADD =()=>{
        props.dispatch({type:'ADD_WORD',en:en,vn:vn});
        console.log('add thanhf cong')
    }
    return(
        <View style={styles.container}>
            <TextInput style={styles.text}  value={en}
                onChangeText={(item)=>setEn(item)}
            />
        <TextInput style={styles.text}
            value={vn}
            onChangeText={(item)=>setVn(item)}
        />
        <TouchableOpacity onPress={()=>ADD()}>
            <Text>ADD</Text>
        </TouchableOpacity>
        </View>
        
    )
}
const styles=StyleSheet.create({
    text:{
        width:300,
        height:40,
        backgroundColor:'orange',margin:10,
        paddingHorizontal:10
    },container:{
        // alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default connect()(Form) ;