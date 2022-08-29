import { StackScreenProps } from "@react-navigation/stack"
import React, { useState } from "react"
import { StyleSheet, Text, ScrollView, Button, TextInput } from "react-native"
import { UserParamlist } from "../../navigations/UserStack"
import { useGetPostsByUserIdQuery, useUpdatePostMutation } from "../../redux/api/firstApi/postApiSlice"
import { Card } from "@rneui/themed";
import Post from "../../redux/models/post"

type Props = StackScreenProps<UserParamlist, "UserPost">

const UserPost = ({ route }: Props) => {
    const { userId } = route.params
    const { data, isLoading } = useGetPostsByUserIdQuery(userId)
    const [ updatePost ] = useUpdatePostMutation()
    const [ postToEdit, setPostToEdit] = useState<number | null>()
    const [ text, setText ] = useState("");

    const editText = (id:number, text:string) => {
        setPostToEdit(id)
        setText(text)
    }

    const submitText = (post: Post, text: string) => {
        setPostToEdit(null)
        updatePost({ id: post.id, userId: post.userId, title: post.title, body: text })
    }

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (data) {
        return (
            <ScrollView style={styles.container}>
                {data.map(post => (
                    <Card key={post.id}>
                        {
                            <>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Divider/>
                                {
                                    postToEdit === post.id 
                                    ? (
                                        <>
                                            <TextInput 
                                                style={styles.input}
                                                multiline
                                                onChangeText={setText} 
                                                value={text}
                                                />
                                            <Button title="Submit" onPress={() => submitText(post, text)}></Button>
                                            <Button title="Cancel" onPress={() => setPostToEdit(null)}></Button>
                                        </>
                                    ) 
                                    : (
                                        <>
                                            <Text>{post.body}</Text>
                                            <Button title="Edit" onPress={() => editText(post.id, post.body)}></Button>
                                        </>
                                    )
                                }
                            </>
                        }
 
                    </Card>
                ))}
            </ScrollView>
        )
    }

    return null
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        padding: 10,
    }
});

export default UserPost