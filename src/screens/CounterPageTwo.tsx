import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Counter from "../components/Counter"

const CounterPageTwo = () => {
    return (
        <View style={styles.container}>
            <Text>CounterPageTwo</Text>
            <Counter/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    }
});

export default CounterPageTwo