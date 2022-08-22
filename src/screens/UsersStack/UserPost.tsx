import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import { UserParamlist } from "../../navigations/UserStack"
import { useGetPostsByUserIdQuery } from "../../redux/api/Post/postSlice"

type Props = StackScreenProps<UserParamlist, "UserPost">

const UserPost = ({ route }: Props) => {
    const { userId } = route.params
    const { data, error, isLoading } = useGetPostsByUserIdQuery(userId)

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (data) {
        return (
            <View style={styles.container}>
                {data.map(post => (
                    <Text key={post.id}>{post.title}</Text>
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

export default UserPost