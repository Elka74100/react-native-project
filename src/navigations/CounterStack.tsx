import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import CounterOne from '../screens/CounterStack/CounterOne';
import CounterTwo from '../screens/CounterStack/CounterTwo';

export type CounterStackParamlist = {
    CounterOne: undefined;
    CounterTwo: undefined;
}

const CounterStack = () => {
    const Stack = createStackNavigator<CounterStackParamlist>();
    return (
        <Stack.Navigator initialRouteName="CounterOne">
            <Stack.Screen name="CounterOne" component={CounterOne}/>
            <Stack.Screen name="CounterTwo" component={CounterTwo}/>
        </Stack.Navigator>
    )
}

export default CounterStack