import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { View, Button, StyleSheet } from "react-native"
import Counter from "../../components/Counter"
import { CounterStackParamlist } from "../../navigations/CounterStack"

type Props = StackScreenProps<CounterStackParamlist, "CounterOne">

const CounterOne = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Counter/>
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

export default CounterOne