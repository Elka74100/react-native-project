import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { View, Button, StyleSheet, Text } from "react-native"
import { CounterStackParamlist } from "../../navigations/CounterStack"

type Props = StackScreenProps<CounterStackParamlist, "CounterOne">

const FecthpageOne = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>fetchpage</Text>
            <Button
                title="Go to CounterTwo"
                onPress={() => navigation.navigate('CounterTwo')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    }
});

export default FecthpageOne