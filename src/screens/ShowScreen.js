import React, {useContext} from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import {Context as blogContext} from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const {state} = useContext(blogContext)
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text>Title: {blogPost.title} - ID: {blogPost.id} </Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress = {()=>navigation.navigate("Edit", {id: navigation.getParam('id')})}
            >
                <AntDesign name="edit" size={24} color="black" />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create ({})

export default ShowScreen;