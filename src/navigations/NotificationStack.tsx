import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import NotificationExample from '../screens/NotificationStack/NotificationExample';


export type NotificationStackParamlist = {
    NotificationExample: undefined;
}

const NotificationStack = () => {
    const Stack = createStackNavigator<NotificationStackParamlist>();
    return (
        <Stack.Navigator initialRouteName="NotificationExample">
            <Stack.Screen name="NotificationExample" component={NotificationExample}/>
        </Stack.Navigator>
    )
}

export default NotificationStack