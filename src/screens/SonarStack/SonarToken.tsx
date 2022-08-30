import React, { useState } from "react"
import { View, StyleSheet, Text, TextInput, Button } from "react-native"
import { useTryAccessTokenMutation } from "../../redux/api/sonarApi/sonarApiSlice"
import { tokenActions } from "../../redux/slices/tokenSlice"
import { useAppDispatch } from "../../redux/store"
import { StackScreenProps } from "@react-navigation/stack"
import { SonarStackParamlist } from "../../navigations/SonarStack"

type Props = StackScreenProps<SonarStackParamlist, "SonarToken">

const SonarToken = ({ navigation }: Props) => {
    const [ text, setText ] = useState("");
    const dispatch = useAppDispatch()
    const [ getComponents ] = useTryAccessTokenMutation()

    return (
        <View style={styles.container}>
            <Text>Enter your access token</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setText} 
                value={text}
            />   
            <Button title="Get list of projects" onPress={ async () => {
                try {
                    dispatch(tokenActions.setToken(text))   
                    const tempComponents = await getComponents(undefined).unwrap()
                    if (tempComponents.components.length) {
                        navigation.navigate('SonarProjects')              
                    } 
                } catch (err) {
                    console.error(err)
                }

            }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        padding: 10,
    }
});

export default SonarToken