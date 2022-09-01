import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import Notification from '../screens/NotificationStack/Notification';


export type NotificationStackParamlist = {
    Notification: undefined;
}

const NotificationStack = () => {
    const Stack = createStackNavigator<NotificationStackParamlist>();
    return (
        <Stack.Navigator initialRouteName="Notification">
            <Stack.Screen name="Notification" component={Notification}/>
        </Stack.Navigator>
    )
}

export default NotificationStack