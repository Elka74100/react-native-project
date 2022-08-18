import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import FetchpageOne from '../screens/FetchpageStack/FetchpageOne';

export type FetchpageParamlist = {
    FetchpageOne: undefined;
    FetchpageTwo: undefined;
}

const FetchpageStack = () => {
    const Stack = createStackNavigator<FetchpageParamlist>();
    return (
        <Stack.Navigator initialRouteName="FetchpageOne">
            <Stack.Screen name="FetchpageOne" component={FetchpageOne}/>
        </Stack.Navigator>
    )
}

export default FetchpageStack