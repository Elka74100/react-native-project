import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CounterStack from './CounterStack';
import UserStack from './UserStack';
import SonarStack from './SonarStack';

const Drawer = () => {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Sonar" component={SonarStack} />
        <Drawer.Screen name="User" component={UserStack} />
        <Drawer.Screen name="Counter" component={CounterStack} />
      </Drawer.Navigator>
    );
  };
  
  export default Drawer;