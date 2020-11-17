import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/BlogContex';
import { useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen </Text>
            <Button title="Add Post"  onPress={() => addBlogPost()} />
            <FlatList 
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;