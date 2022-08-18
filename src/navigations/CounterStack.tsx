import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import CounterPageOne from '../screens/CounterPageOne';
import CounterPageTwo from '../screens/CounterPageTwo';

export type CounterStackParamlist = {
    CounterPageOne: undefined;
    CounterPageTwo: undefined;
}

const CounterStack = () => {
    const Stack = createStackNavigator<CounterStackParamlist>();
    return (
        <Stack.Navigator initialRouteName="CounterPageOne">
            <Stack.Screen name="CounterPageOne" component={CounterPageOne}/>
            <Stack.Screen name="CounterPageTwo" component={CounterPageTwo}/>
        </Stack.Navigator>
    )
}

export default CounterStack