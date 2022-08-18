import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './Drawer'

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
    )
}

export default AppNavContainer