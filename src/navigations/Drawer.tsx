import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CounterStack from './CounterStack';
import UserStack from './UserStack';
import SonarStack from './SonarStack';
import MapStack from './MapStack';
import NotificationStack from './NotificationStack';

const Drawer = () => {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Notification" component={NotificationStack} />
        <Drawer.Screen name="Map" component={MapStack} />
        <Drawer.Screen name="Sonar" component={SonarStack} />
        <Drawer.Screen name="User" component={UserStack} />
        <Drawer.Screen name="Counter" component={CounterStack} />
      </Drawer.Navigator>
    );
  };
  
  export default Drawer;