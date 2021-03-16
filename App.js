/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Main from './component/Main'

const App = () => {
  

  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
};
const defaulState ={
 arrWord:[ { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
  { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
  { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
  { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
  { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
  { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
  { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
  { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
  { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
  { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
  { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
  { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
  { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
  { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
],
filterStatus :'SHOW_ALL',
isAding:false
};
const reducer =(state=defaulState,action)=>{
  switch(action.type){
    case 'FILTER_SHOW_ALL':
      return {...state,filterStatus:'SHOW_ALL'}
      break; 
    
    case 'FILTER_NEED_PRACTICE':
      return {...state,filterStatus:'NEED_PRACTICE'}
    case 'FILTER_MEMORIZED':
      return {...state,filterStatus:'MEMORIZED'}
    case 'TOGGLE_MEMORIZED':
      return{ ...state,
      arrWord:state.arrWord.map(e=>{
        if(e.id !==action.id){
          return e;
        }
        else{
          return {...e,memorized:!e.memorized}
        }
      })
      }
    case 'ISADDING':
      return{
        ...state,isAding:!state.isAding
      }
    case 'ADD_WORD':
      return{
        ...state,arrWord:[...state.arrWord,{id:state.arrWord.length+1,en:action.en,vn:action.vn,memorized:true,isShow:false}]
      }
  }
  return state;
}
const store = createStore(reducer);
const styles = StyleSheet.create({
  
});

export default App;
