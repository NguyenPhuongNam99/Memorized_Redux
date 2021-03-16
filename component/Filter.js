import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
const Filter =(props)=>{
    const getTextStyle =(statusName) =>{
        if(statusName == props.myFilterStatus)
            {
                return {color:'blue',fontWeight:'bold'}
            }
            else{
                return styles.buttonText;
            }
    }
    const setAction =(actionType)=>{
        props.dispatch({type:actionType})
    }
    return(
        <View style={styles.container}>
                <TouchableOpacity onPress={()=>setAction('FILTER_SHOW_ALL')}>
                    <Text style={getTextStyle("SHOW_ALL")}>Show All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAction('FILTER_MEMORIZED')}>
                    <Text style={getTextStyle("MEMORIZED")}>Memmories</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAction('FILTER_NEED_PRACTICE')}>
                    <Text style={getTextStyle("NEED_PRACTICE")}>Nedd Practice</Text>
                </TouchableOpacity>
            </View>
    )
}
const mapstateToProps =(state)=>{
    return {myFilterStatus:state.filterStatus}
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'orange',
      flex:1,
      flexDirection:'row',alignItems:'center',
      justifyContent:'space-around'
    },
    buttonText:{
        color:'red'
    }
})
export default connect(mapstateToProps,null)( Filter);