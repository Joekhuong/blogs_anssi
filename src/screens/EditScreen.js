import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context as blogContext} from '../context/BlogContext'

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const {state, editBlogPost} = useContext(blogContext)
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogPostForm 
            onSubmit={(title,content)=>
                editBlogPost(
                    id,
                    title,
                    content,
                    ()=>navigation.pop())}
            
            initialValues = {{title: blogPost.title, content: blogPost.content}}
        />
    )

}

const styles = StyleSheet.create({
    
})

export default EditScreen