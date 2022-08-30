import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import MaxExample from '../screens/MapStack/MapExample';

export type MapStackParamlist = {
    MaxExample: undefined;
}

const MapStack = () => {
    const Stack = createStackNavigator<MapStackParamlist>();
    return (
        <Stack.Navigator initialRouteName="MaxExample">
            <Stack.Screen name="MaxExample" component={MaxExample}/>
        </Stack.Navigator>
    )
}

export default MapStack