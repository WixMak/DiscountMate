import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../redux/actions/common';


const Main = () =>{
  const auth = useSelector(state => state.auth);
  const num = useSelector(state => state.number);

  const dispatch = useDispatch();
    return(
    <SafeAreaView>
        <Text>{num}</Text>
        <TouchableOpacity style={styles.btn} onPress={() =>{console.log(auth)}}>
                <Text style={styles.btn_text}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => dispatch(ADD(3))}>
                <Text style={styles.btn_text}>Add</Text>
            </TouchableOpacity>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  btn:{
      marginTop:20,
      backgroundColor: 'grey',
      borderRadius: 20,
      paddingVertical: 10
      
  },
  btn_text:{
      textAlign:'center',
      color:'white',
      fontSize: 20,
  }
}) 
export default Main;