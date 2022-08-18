import React from "react"
import { View, StyleSheet } from "react-native"
import Counter from "../../components/Counter"

const CounterTwo = () => {
    return (
        <View style={styles.container}>
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

export default CounterTwo