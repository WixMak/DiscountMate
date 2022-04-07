import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Navigation
const Tab = createBottomTabNavigator();

//Screen
import Main from './Screen/main';
import Login from './Screen/Login';

const Navigation = () => {
    return(
   
        <Tab.Navigator>
            <Tab.Screen
            name='Home'
            component={Main}
            options={{
                title:"Welcome",
            }}
            />
            <Tab.Screen
            name='Login'
            component={Login}
            options={{
               headerShown:false,
            }}/>
        </Tab.Navigator>

       
    );
}

export default Navigation;
