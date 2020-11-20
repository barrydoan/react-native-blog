import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContex';
import { useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context);

    return (
        <View>
            <Button title="Add Post"  onPress={() => addBlogPost()} />
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={}>
                            <Feather style={styles.icon} name='trash' />
                        </TouchableOpacity>
                        
                    </View>
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;