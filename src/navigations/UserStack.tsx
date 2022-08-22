import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import UserList from '../screens/UsersStack/UserList';
import UserPost from '../screens/UsersStack/UserPost';

export type UserParamlist = {
    UserList: undefined;
    UserPost: { userId: number };
}

const UserStack = () => {
    const Stack = createStackNavigator<UserParamlist>();
    return (
        <Stack.Navigator initialRouteName="UserList">
            <Stack.Screen name="UserList" component={UserList}/>
            <Stack.Screen name="UserPost" component={UserPost}/>
        </Stack.Navigator>
    )
}

export default UserStack