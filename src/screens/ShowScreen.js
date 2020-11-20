import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContex';

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context);

    console.log(state);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    console.log(navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ShowScreen;

