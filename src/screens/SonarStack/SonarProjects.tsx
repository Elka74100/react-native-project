import React from "react"
import { Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useGetComponentsQuery } from "../../redux/api/sonarApi/sonarApiSlice"

const SonarProjects = () => {
    const { data, isLoading } = useGetComponentsQuery(undefined)

    if (isLoading) {
        return  <Text>Loading...</Text>
    }

    if (data) {
        return (
            <ScrollView>
                {data.components.map(component => 
                    <Text key={component.key}>{component.name}</Text>
                )}
            </ScrollView>
        )
    }    
    
    return null

}

export default SonarProjects