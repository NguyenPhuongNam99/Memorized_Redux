import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Form from './Form';
const Main = (props) => {
    const { myFilter, myWord ,isADDING} = props
    const getData = () => {
        if (myFilter === 'SHOW_ALL') return myWord;
        if (myFilter === 'MEMORIZED') return myWord.filter(e => e.memorized)
        if (myFilter === 'NEED_PRACTICE') return myWord.filter(e => !e.memorized)
    }
    const IS = () => {
        props.dispatch({ type: 'ISADDING' });
        console.log("dd",isADDING)
    }
    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch' }}>
            {/* <Text>{props.myFilter}</Text> */}


            <View style={{ paddingHorizontal: 20, flexDirection: 'row', flex: 1, backgroundColor: 'green', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text></Text>
                <Text>myword</Text>
                <TouchableOpacity onPress={() => IS()}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 10 }}>
                {
                    isADDING ? <Form /> : null
                         
                }
                <FlatList
                    data={getData()}
                    renderItem={({ item }) =>
                        <Word myword={item} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Filter />
        </View>
    )
}

function mapStateToProp(state) {
    return {
        myFilter: state.filterStatus,
        myWord: state.arrWord,
        isADDING: state.isAding
    }
}
export default connect(mapStateToProp)(Main)