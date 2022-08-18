import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { counterActions, selectCounter } from '../redux/slices/counterSlice'

 const Counter = () => {
  const counter = useAppSelector(selectCounter)
  const dispatch = useAppDispatch()

  return (
      <View>
        <Button
          title="Increment value"
          onPress={() => dispatch(counterActions.increment())}
        />
        <Text style={styles.text}>{counter.value}</Text>
        <Button
          title="Decrement value"
          onPress={() => dispatch(counterActions.decrement())}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  }
});

export default Counter