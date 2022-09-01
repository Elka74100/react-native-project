import React from 'react';
import { View } from 'react-native';
import notifee from '@notifee/react-native';
import { Button } from '@rneui/base';

const NotificationExample = () => {
    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: 'Notification Title',
          body: 'Main body content of the notification',
          android: {
            channelId,
          },
        });
    }

    return (
        <View>
            <Button title="Display Notification" onPress={() => {onDisplayNotification()}} />
        </View>
    )
}

export default NotificationExample