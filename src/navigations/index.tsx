import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import CounterStack from './CounterStack'

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            <CounterStack />
        </NavigationContainer>
    )
}

export default AppNavContainer