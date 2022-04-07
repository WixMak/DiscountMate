import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStore, combineReducers } from 'redux';
import appReducer from './src/redux/reducers/AppReducers';
import numReducer from './src/redux/reducers/numReducers';
import { Provider as ReduxProvider } from 'react-redux';


const supaReducer = combineReducers ({
  state1:appReducer,
 
})

const store = createStore(supaReducer);
console.log(store.getState())

const Stack = createNativeStackNavigator();

const App = () => {
  return(
   <ReduxProvider store={store}>
       <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
         name="Navigation"
         component={Navigation}
         options={{headerShown: false}}/>
       </Stack.Navigator>
      </NavigationContainer>
   </ReduxProvider>
    
   
 
 
  )

};



export default App;
