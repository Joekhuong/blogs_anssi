import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Create new Blog</Text>
        <Text style={styles.textStyle}>Add title:</Text>
        <TextInput
            style = {styles.inputStyle}
            value = {title}
            onChangeText = {(newTitle)=>setTitle(newTitle)}
        />
        <Text style={styles.textStyle}>Add content:</Text>
        <TextInput
            value = {content}
            style = {styles.inputStyle}
            onChangeText = {(newContent) => setContent(newContent)}
        />
        <Button  
            title="Save" 
            onPress={()=> onSubmit(title,content)}/>
    </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles= StyleSheet.create({
    title:{
        fontSize: 30 
    },
    inputStyle: {
        borderWidth: 1,
        borderStyle: "solid",
        margin: 5,
        height: 50,
        padding: 10,
        marginBottom: 15
    },
    textStyle: {
        fontSize:20
    },
    container:{
        flex:1,
        marginTop: 20
    }
})


export default BlogPostForm