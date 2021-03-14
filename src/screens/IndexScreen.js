import React, {useContext,useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost, getBlogPost} = useContext(Context);

    useEffect(()=>{
        getBlogPost();

        //Create listerner for when user navigate back to IndexScreen
        const listener = navigation.addListener('didFocus', ()=>{
            getBlogPost();
        })
        return ()=>{
            //Clean up
            listener.remove();
        }
    },[])

    return (
        <>         
            <FlatList 
                data = {state}
                keyExtractor = {(blog) => blog.title}
                renderItem = {({item}) =>
                    {
                        return (
                        <TouchableOpacity onPress = {()=>navigation.navigate("Show", {id: item.id})}>
                            <View
                                style={styles.row}                           
                            >
                                <Text>{item.title}- ID: {item.id}</Text>
                                <TouchableOpacity 
                                    style = {styles.title}
                                    onPress = {()=>deleteBlogPost(item.id)}
                                >
                                    <MaterialIcons name="highlight-remove" style={styles.icon}/>
                                </TouchableOpacity>      
                            </View>
                        </TouchableOpacity>
                        )
                    }
                }
            />
        </>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                 <AntDesign name="plus" size={30} color="black" />
            </TouchableOpacity>
        ),
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title : {
        fontSize: 18
    },
    icon : {
        fontSize: 24,
        color: 'black'
    }
})

export default IndexScreen;