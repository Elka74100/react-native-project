import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import SonarToken from '../screens/SonarStack/SonarToken';
import SonarProjects from '../screens/SonarStack/SonarProjects';


export type SonarStackParamlist = {
    SonarToken: undefined;
    SonarProjects: undefined
}

const SonarStack = () => {
    const Stack = createStackNavigator<SonarStackParamlist>();
    return (
        <Stack.Navigator initialRouteName="SonarToken">
            <Stack.Screen name="SonarToken" component={SonarToken}/>
            <Stack.Screen name="SonarProjects" component={SonarProjects}/>
        </Stack.Navigator>
    )
}

export default SonarStack