import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet, Text,} from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import CONST from "../../styles/CONST";
import {SwipeRow, Button, Icon} from 'native-base'


export default class TaskComponent extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
        hTime: PropTypes.number.isRequired,
        mTime: PropTypes.number.isRequired,
    };

    static defaultProps = {
        title: "Title",
        data: 'Сегодня',
        hTime: 1,
        mTime: 2,
    };

    render() {

        const {title, data, hTime, mTime} = this.props;

        return (
            <View style={styles.swipe}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.time}>{`${data} в ${hTime}:${mTime}`}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    title: {
        fontSize: totalSize(2.5),
        color: CONST.colors.black,
        width: '90%'
    },
    time: {
        fontSize: totalSize(2),
        color: CONST.colors.grey
    },
    swipe: {
        width: width(90),
        backgroundColor: CONST.colors.white,
        alignSelf: 'center',
        borderRadius: 5,
        paddingHorizontal: width(1.5),
        marginHorizontal: height(2)
    },
});