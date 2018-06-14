import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'
import CONST from "../../styles/CONST";



export default class TaskComponent extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
        hTime: PropTypes.number.isRequired,
        mTime: PropTypes.number.isRequired,
    };

    static defaultProps = {
        onPress: () => null,
        title: "Title",
        data: 'Сегодня',
        hTime: 1,
        mTime: 2,
    };

    render() {

        const { onPress, title, data, hTime, mTime } = this.props;

        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text numberOfLines={4} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.time}>{`${data} в ${hTime}:${mTime}`}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: width(90),
        paddingVertical: height(2),
        paddingHorizontal: width(1.5),
        backgroundColor: CONST.colors.white,
        borderRadius: 5,
        marginVertical: height(1.5)
    },
    title: {
        fontSize: totalSize(2.5),
        color: CONST.colors.black
    },
    time: {
        fontSize: totalSize(2),
        color: CONST.colors.grey
    }
});