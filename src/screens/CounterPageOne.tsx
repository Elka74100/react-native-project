import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import Counter from "../components/Counter"
import { CounterStackParamlist } from "../navigations/CounterStack"

type Props = StackScreenProps<CounterStackParamlist, "CounterPageOne">

const CounterPageOne = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>CounterPageOne</Text>
            <Counter/>
            <Button
                title="Go to CounterPageTwo"
                onPress={() => navigation.navigate('CounterPageTwo')}
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

export default CounterPageOne