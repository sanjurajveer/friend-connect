import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, FlatList, Text, Image } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Header from "./components/header.js";
import Post from "./components/post.js";

const window = Dimensions.get('window');

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./assets/img/home-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="Friend Connect"
                    iconOpacity={1}
                    onPress={() => this.props.navigation.navigate('NewPost')}
                />
                <FlatList
                    style={{height: window.height-118}}
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
                    renderItem={({item}) => <Post navigation={this.props.navigation}/>}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
    },
    icon: {
        width: 26,
        height: 26
    }
});
