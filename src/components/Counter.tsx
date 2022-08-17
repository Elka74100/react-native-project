import React from 'react'
import { Button, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { decrement, increment, selectCount } from '../redux/slices/counterSlice'

export const Counter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
      <View>
        <Button
          title="Increment value"
          onPress={() => dispatch(increment())}
        />
        <Text>{count}</Text>
        <Button
          title="Decrement value"
          onPress={() => dispatch(decrement())}
        />
      </View>
  )
}