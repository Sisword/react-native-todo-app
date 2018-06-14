import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet, Text, } from 'react-native'
import {width, height, totalSize} from 'react-native-dimension'
import CONST from "../../styles/CONST";
import {SwipeRow, Button, Icon} from 'native-base'


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

        const {onPress, title, data, hTime, mTime} = this.props;

        return (
            <View style={styles.container}>
                <SwipeRow
                    style={styles.swipe}
                    rightOpenValue={-75}
                    body={
                        <View style={styles.swipeInner}>
                            <Text numberOfLines={4} style={styles.title}>{title}</Text>
                            <Text numberOfLines={1} style={styles.time}>{`${data} в ${hTime}:${mTime}`}</Text>
                        </View>
                    }
                    right={
                        <Button danger style={{ borderRadius: 5}} onPress={ onPress }>
                            <Icon active name="trash"/>
                        </Button>
                    }
                />
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: width(90),
        backgroundColor: 'transparent',
        borderRadius: 5,
        marginVertical: height(1.5),
        borderColor: 'transparent',
        borderWidth: 0,
        alignSelf: 'center'
    },
    title: {
        fontSize: totalSize(2.5),
        color: CONST.colors.black
    },
    time: {
        fontSize: totalSize(2),
        color: CONST.colors.grey
    },
    swipeInner: {
        flex: 1,
        backgroundColor: CONST.colors.white,
        borderRadius:5,
        paddingHorizontal: width(2),
        paddingVertical: height(1)
    },
    swipe: {
        borderRadius: 5,
        flex: 1,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
    }
});