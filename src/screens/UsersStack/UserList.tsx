import { StackScreenProps } from "@react-navigation/stack"
import React, { useEffect } from "react"
import { StyleSheet, Text, Button, ScrollView, RefreshControl } from "react-native"
import { UserParamlist } from "../../navigations/UserStack"
import { useGetUsersQuery } from "../../redux/api/firstApi/userApiSlice"

type Props = StackScreenProps<UserParamlist, "UserList">

const UserList = ({ navigation }: Props) => {
    const { data, isLoading, isFetching, refetch } = useGetUsersQuery(undefined)
    const [ refreshing, setRefreshing ] = React.useState(false);

    useEffect(() => {
        setRefreshing(isFetching)
    }, [isFetching])

    if (isLoading) {
        return <Text>Loading...</Text>
    } 

    if (data) {
        return (
            <ScrollView 
                style={styles.container}
                refreshControl={
                    <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => refetch()}
                    />
                }
            >
                {data.map(user => (
                    <Button 
                        key={user.id} 
                        title={user.name} 
                        onPress={() => navigation.navigate("UserPost", {
                            userId: user.id
                        })}
                    />
                ))}
            </ScrollView>
        )
    }

    return null
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

export default UserList