import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'



export default class TaskComponent extends Component {
    constructor(props) {
        super(props);
    }

    static PropTypes = {
        onPress: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }

    static defaultProps = {
        onPress: () => null,
        title: "Title",
        time: 'Description',
    }

    render() {

        const { onPress, title, time } = this.props;

        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.time}>{time}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: width(90),
        paddingVertical: height(1.5),
        paddingHorizontal: width(1.5)
    },
    title: {
        fontSize: totalSize(2),
    },
    time: {
        fontSize: totalSize(1),
    }
});