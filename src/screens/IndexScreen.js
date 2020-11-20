import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContex';
import { useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button title="Add Post"  onPress={() => addBlogPost()} />
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('Show', {id : item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name='trash' />
                            </TouchableOpacity>
                            
                        </View>
                        </TouchableOpacity> 
                }}

            />
        </View>
    );
};

IndexScreen.navigationOptions = () => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
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