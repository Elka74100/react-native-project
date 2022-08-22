import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import { UserParamlist } from "../../navigations/UserStack"
import { useGetUsersQuery } from "../../redux/api/User/userSlice"

type Props = StackScreenProps<UserParamlist, "UserList">

const UserList = ({ navigation }: Props) => {
    const { data, error, isLoading } = useGetUsersQuery(undefined)

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (data) {
        return (
            <View style={styles.container}>
                {data.map(user => (
                    <Button 
                        key={user.id} 
                        title={user.name} 
                        onPress={() => navigation.navigate("UserPost", {
                            userId: user.id
                        })}
                    />
                ))}
            </View>
        )
    }

    return null
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    }
});

export default UserList