import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CounterStack from './CounterStack';
import FetchpageStack from './fetchPageStack';

const Drawer = () => {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Counter" component={CounterStack} />
        <Drawer.Screen name="Fetch" component={FetchpageStack} />
      </Drawer.Navigator>
    );
  };
  
  export default Drawer;